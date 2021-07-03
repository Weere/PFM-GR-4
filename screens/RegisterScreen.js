import React, {useState, useEffect, useCallback, useReducer} from 'react'
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import InputCustom from '../components/InputCustom';
import * as userActions from '../store/actions/user';
import user from '../store/reducers/user';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (actin.type === FORM_INPUT_UPDATE) {
        
    }
};

const AppWrapper = () => {
    const rootReducer = combineReducers({
        content: user
    });

    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <RegisterScreen />
        </Provider>
    )
}

const RegisterScreen = ({navigation}) => {

    const pressHandler = () => {
        props.push("LoginScreen")
    }
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            userName: '', telNo: '', email: '', date: '', income: '', password: ''
        }, 
        inputValidities: {
            userName: false, telNo: false, email: false, date: false, income: false, password: false
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
        if (!userNameIsValid) {
            Alert.alert(
                'Wrong input!', 'Please check the errors in the form.', [{ text: 'Okay' }]
            );
            return;
        }
        console.log('Submitting');
    
        dispatch(
            userActions.createUser(userName, telNo, date, email, income, password)
        ); 
        navigation.goBack();
    }, [
        dispatch, userName, telNo, date, email, income, password, userNameIsValid
    ]);

    useEffect(() => {
        navigation.setParams({submit: submitHandler})
    }, [submitHandler]);

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false
        if (text.trim().length > 0) {
            isValid = true;
        } 
        dispatchFormState({
            type: FORM_INPUT_UPDATE, value: text, isValid: isValid, input: inputIdentifier
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
                        value={userName} 
                        onChangeText={textChangeHandler.bind(this, 'userName')} 
                        placeholder="Your Name" 
                        keyboardType="default"
                        autoCapitalize='words'
                        returnKeyType='next'
                        />
                        {!userNameIsValid && <Text>Please enter a valid Name</Text>}
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Tel No</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput style={styles.TextInput}
                        style={styles.input} 
                        value={telNo} 
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
                        value={email} 
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
                        value={date} 
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
                        value={income}
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
                        value={password} 
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
                        value={password1} 
                        onChangeText={textChangeHandler.bind(this, 'password1')} 
                        placeholder="Your Names" 
                        />
                    </View>
                </View>
                
                <View style={styles.ButtonContainer}>
                    <Button
                        styles={styles.Button}
                        title='Sign Up'
                        //title={isSignup ? 'Login' : 'Sign Up'}
                        //color={Colors.accent}
                        onPress={//() => { 
                                submitHandler
                        //setIsSignup(prevState => prevState);
                        //}
                    }
                    />
                    <View style={styles.space} />
                    <Button 
                        styles={styles.Button}
                        title='Login'
                        //title={isSignup ? 'Login' : 'Sign Up'}
                        //color={Colors.accent}
                        onPress={
                        //setIsSignup(prevState => !prevState);
                        ()=>navigation.navigate("LoginScreen")
                        }
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
        backgroundColor: '#3E2B8A'
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
    }
});

export default AppWrapper;