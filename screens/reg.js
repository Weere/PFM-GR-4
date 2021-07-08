import React, {useState, useEffect, useCallback, useReducer} from 'react'
import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

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

    // const pressHandler = () => {
    //     navigation.push("LoginScreen")
    // }

    const user = useSelector(state => state.users.availableUsers);

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
        if (formState.inputValues.password != formState.inputValues.password1) {
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

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false
        if (text.trim().length > 0) {
            isValid = true;
        } 
        dispatchFormState({
            type: FORM_INPUT_UPDATE, 
            value: text, 
            isValid: isValid, 
            input: inputIdentifier
        });
    };

    return(
        
        <ScrollView>
            
            <View style={styles.ContainerForm}>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.label}>Name</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        style={styles.input} 
                        value={formState.inputValues.userName} 
                        onChangeText={textChangeHandler.bind(this, 'userName')} 
                        placeholder="Your Name" 
                        keyboardType="default"
                        autoCapitalize='words'
                        returnKeyType='next'
                        />
                    </View>
                    {!formState.inputValidities.userName && <Text>Please enter a valid Name</Text>}
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Tel No</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput style={styles.TextInput}
                        style={styles.input} 
                        value={formState.inputValues.telNo} 
                        onChangeText={textChangeHandler.bind(this, 'telNo')} 
                        placeholder="Phone Number" 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Email</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        style={styles.input} 
                        value={formState.inputValues.email} 
                        onChangeText={textChangeHandler.bind(this, 'email')} 
                        placeholder="Your Email" 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Date of Birth</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        style={styles.input} 
                        value={formState.inputValues.date} 
                        onChangeText={textChangeHandler.bind(this, 'date')} 
                        placeholder="dd/mm/yyyy" 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Income Range</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        style={styles.input} 
                        value={formState.inputValues.income}
                        onChangeText={textChangeHandler.bind(this, 'income')} 
                        placeholder="Monthly" 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Password</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        style={styles.input} 
                        value={formState.inputValues.password} 
                        onChangeText={textChangeHandler.bind(this, 'password')} 
                        placeholder="Password" 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Confirm Password</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        style={styles.input} 
                        value={formState.inputValues.password1} 
                        onChangeText={textChangeHandler.bind(this, 'password1')} 
                        placeholder="Confirm Password"
                        secureTextEntry 
                        />
                    </View>
                </View>
                
                <View style={styles.ButtonContainer}>
                    <Button
                        styles={styles.Button}
                        title='Sign Up'
                        onPress={ submitHandler }
                    />
                    <View style={styles.space} />
                    <Button 
                        styles={styles.Button}
                        title='Login'
                        onPress={ ()=>navigation.navigate("LoginScreen") }
                    />
                </View>
            </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    ContainerForm: {
        flex: 1,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'orange' //'#3E2B8A'
    },
    Container: {
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center'
    },
    TextContainer: {},
    label: {
        marginVertical: 8
    },
    TextInput: {
        color: '#969697'
    },
    InputContainer: {
        flex: 1,
        color: 'white',
        // paddingLeft: 15,
        // paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    ButtonContainer: {
        width: '80%',
        flex: 1,
        padding: 20,
        flexDirection: 'column'
    },
    Button: {
        padding: 10,
        margin: 10
    },
    space: {
        width: 20
    },
    input: {
        textAlign: 'center'
    }
});

export default RegisterScreen;