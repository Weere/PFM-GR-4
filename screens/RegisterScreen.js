import React, {useState, useEffect, useCallback, useReducer} from 'react'
import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Trial from '../components/trial';
//import { dateselected } from '../components/trial';
import InputCustom from '../components/InputCustom';
import * as userActions from '../store/actions/user';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const RegisterScreen = ({navigation}) => {

    //const user = useSelector(state => state.users.availableUsers);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();

    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            userName: '', 
            telNo: '', 
            email: '', 
            date: Trial.dateselected,
            income: '', 
            password: ''
        }, 
        inputValidities: {
            userName: false, 
            telNo: false, 
            email: false, 
            //date: false, 
            income: false, 
            password: false
        }, 
        formIsValid: false
    });

    const submitHandler = useCallback(() => { 
        if (formState.inputValues.password !== formState.inputValues.password1) {
            Alert.alert(
                'Password miss match', 'Please check your passwords if they are the same.', [{ text: 'Okay'}]
            );
            return;
        }
        if (!formState.formIsValid) {
            Alert.alert(
                'Wrong input!', 'Please check the errors in the form.', [{ text: 'Okay' }]
            );
            return;
        }
        console.log(formState);
    
        dispatch(
            userActions.createUser(
                formState.inputValues.userName, 
                formState.inputValues.telNo, 
                formState.inputValues.date, 
                formState.inputValues.email, 
                formState.inputValues.income, 
                formState.inputValues.password
            )
        ); 
        navigation.goBack();
    }, [ dispatch, formState ]
    );

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE, 
            value: inputValue, 
            isValid: inputValidity, 
            input: inputIdentifier
        });
    }, [dispatchFormState]);

    return(
        <KeyboardAvoidingView
            style={{ flex: 1, justifyContent: 'center', margin: 20 }}
            behavior="padding"
            keyboardVerticalOffset={50}
        >
            
                
                <View style={styles.form}>
                <ScrollView>
                    <InputCustom
                        id='userName'
                        label='Name'
                        errorText='Please enter a valid name!'
                        placeholder="Your Name" 
                        keyboardType="default"
                        autoCapitalize='words'
                        returnKeyType='next'
                        onInputChange={inputChangeHandler}
                        initialValue=''
                        required
                        // initiallyValid = {false}
                    />
                    <InputCustom
                        id='telNo'
                        label='Phone Number'
                        errorText='Please enter a valid phone number!'
                        placeholder="256*******" 
                        keyboardType="decimal-pad"
                        returnKeyType='next'
                        onInputChange={inputChangeHandler}
                        num
                        initialValue=''
                        required
                    />
                    <InputCustom
                        id='email'
                        label='Email'
                        errorText='Please enter a valid email!'
                        placeholder="Your Email" 
                        keyboardType="email-address"
                        autoCapitalize='none'
                        returnKeyType='next'
                        onInputChange={inputChangeHandler}
                        email
                        initialValue=''
                        required
                    />         
                    {/* <InputCustom
                        id='date'
                        label='Date Of Birth'
                        errorText='Please enter a valid date!'
                        placeholder="dd/mm/yyyy" 
                        keyboardType="default"
                        autoCapitalize='none'
                        returnKeyType='next'
                        onInputChange={inputChangeHandler}
                        editable={false}
                        initialValue=''
                        required
                    />  */}
                    <InputCustom
                        id='income'
                        label='Income'
                        errorText='Please enter a valid amount!'
                        placeholder="Monthly" 
                        keyboardType="decimal-pad"
                        autoCapitalize='none'
                        returnKeyType='next'
                        onInputChange={inputChangeHandler}
                        min={0.1}
                        num
                        initialValue=''
                        required
                    />
                    <InputCustom
                        id='password'
                        label='Password'
                        errorText='Please enter a valid password!'
                        placeholder="Password" 
                        keyboardType="default"
                        autoCapitalize='none'
                        returnKeyType='next'
                        onInputChange={inputChangeHandler}
                        secureTextEntry
                        minLength={4}
                        initialValue=''
                        required
                    />
                    <InputCustom
                        id='password1'
                        label='Confirm Password'
                        errorText='Please enter a valid password!'
                        placeholder="Password" 
                        keyboardType="default"
                        autoCapitalize='none'
                        returnKeyType='next'
                        onInputChange={inputChangeHandler}
                        secureTextEntry
                        minLength={4}
                        initialValue=''
                        required
                    />
                    <Trial />
                    <View style={styles.ButtonContainer}>
                        <Button
                            styles={styles.Button}
                            title='Sign Up'
                            onPress={ submitHandler }
                        />
                        <View style={styles.space} />
                        <Button 
                            styles={styles.Button}
                            title='Switch to Login'
                            onPress={ ()=>navigation.navigate("LoginScreen") }
                        />
                    </View>
                    </ScrollView>
                </View>
           
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    form: {
        justifyContent: 'center',
        //margin: 20,

        padding: 20,

        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    space: {
        height: 10
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingVertical: 5
    }      
  });

export default RegisterScreen;