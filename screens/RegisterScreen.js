import React, {useState, useEffect, useCallback, useReducer} from 'react'
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';

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

    /////
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      //const currentDate = selectedDate;
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
   
    const dateselected = date.toString();
    /////

    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            userName: '', 
            telNo: '', 
            email: '', 
            //date: dateselected,
            income: '', 
            occupation: '',
            password: ''
        }, 
        inputValidities: {
            userName: false, 
            telNo: false, 
            email: false, 
            //date: false, 
            income: false, 
            occupation: false,
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
    
        dispatch(
            userActions.createUser(
                formState.inputValues.userName, 
                formState.inputValues.telNo, 
                dateselected,
                //formState.inputValues.date, 
                formState.inputValues.email, 
                formState.inputValues.income,
                formState.inputValues.occupation, 
                formState.inputValues.password
            )
        ); 
        navigation.goBack();
    }, [ dispatch, formState, dateselected ]
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
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <ScrollView>
                        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50}>
                            <InputCustom
                                id='userName'
                                label='Name:'
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
                                label='Phone Number:'
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
                                label='Email:'
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
                            <InputCustom
                                id='income'
                                label='Income:'
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
                                id='occupation'
                                label='Occupation:'
                                errorText='Please enter a valid occupation!'
                                placeholder="Your occupation" 
                                keyboardType="default"
                                autoCapitalize='words'
                                returnKeyType='next'
                                onInputChange={inputChangeHandler}
                                initialValue=''
                                //required
                                // initiallyValid = {false}
                            />
                            <InputCustom
                                id='password'
                                label='Password:'
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
                                label='Confirm Password:'
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
                            <View>
                                <View style={styles.control}>
                                    <Text>Date of Birth</Text>
                                    <TouchableOpacity onPress={showDatepicker}>
                                        <Text style={{color: 'blue'}}>Click to select date</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                {show ? (
                                    <DateTimePicker
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                    />
                                ) : <Text style={styles.textInput}>{dateselected}</Text>}
                                
                            </View>
                        </KeyboardAvoidingView>
                        <View style={styles.ButtonContainer}>
                            <Button
                                //color='blue'
                                styles={styles.Button}
                                title='Sign Up'
                                onPress={ submitHandler }
                            />
                            <View style={styles.space} />
                            <Button 
                                color='orange'
                                styles={styles.Button}
                                title='Switch to Login'
                                onPress={ ()=>navigation.navigate("LoginScreen") }
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
         flex: 1, 
        justifyContent: 'center', 
         alignItems: 'center',
         margin: 10 
    },
    form: {
       // justifyContent: 'center',
        //margin: 20,
        marginHorizontal: 5,
        padding: 10,
        paddingBottom: 20,

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
        paddingHorizontal: 10,
        paddingVertical: 10,
    },     
    textInput: {
        textAlign: 'center',
        paddingBottom: 25,
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 15
    },
  });

export default RegisterScreen;