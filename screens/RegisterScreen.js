import React, {useState, useEffect, useCallback, useReducer} from 'react'
import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Trial } from './trial';
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

    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            userName: '', 
            telNo: '', 
            email: '', 
            date: '', 
            income: '', 
            password: ''
        }, 
        inputValidities: {
            userName: false, 
            telNo: false, 
            email: false, 
            date: false, 
            income: false, 
            password: false
        }, 
        formIsValid: false
    });

    // const [userName, setUserName] = useState('');
    // const [userNameIsValid, setUserNameIsValid] = useState(false);
    // const [telNo, setTelNo] = useState('');
    // const [email, setEmail] = useState('');
    // const [date, setDate] = useState('');
    // const [income, setIncome] = useState('');
    // const [occupation, setOccupation] = useState('');
    // const [password, setPassword] = useState('');
    // const [password1, setPassword1] = useState('');
    // const [error, setError] = useState();
    // const [loading, setLoading] = useState(false);
    // const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

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
        console.log('Submitting');
    
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

    // useEffect(() => {
    //     navigation.setParams({submit: submitHandler})
    // }, [submitHandler]);

    useEffect(() => {
        submit: submitHandler;
    }, [submitHandler]);

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
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={100}
        >

        <ScrollView>
            
            <View style={styles.form}>
                <InputCustom
                    id='userName'
                    label='Name'
                    errorText='Please enter a valid name!'
                    placeholder="Your Name" 
                    keyboardType="default"
                    autoCapitalize='words'
                    returnKeyType='next'
                    onInputChange={inputChangeHandler}
                    // initialValue=''
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
                />
                {/* <View style={styles.control}>
                    <Text>
                        Date Of Birth
                    </Text>
                    <Trial />
                </View> */}
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
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    form: {
        justifyContent: 'center',
        margin: 20
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