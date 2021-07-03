import React, {useState} from 'react'
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';

import InputCustom from '../components/InputCustom';

const RegisterScreen = ({navigation}) => {

    const pressHandler = () => {
        navigation.push("LoginScreen")
    }

    const [userName, setUserName] = useState('');
    const [telNo, setTelNo] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [income, setIncome] = useState('');
    const [occupation, setOccupation] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [loading, setLoading] = useState(false);
    const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

    return(
        <ScrollView>
            <View style={styles.ContainerForm}>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Name</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        onChangeText={() => {}} 
                        placeholder="Your Name" 
                        value="userName" 
                        style={styles.input} 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Tel No</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput style={styles.TextInput}
                        onChangeText={() => {}} 
                        placeholder="Phone Number" 
                        value="telNo" 
                        style={styles.input} 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Email</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        onChangeText={() => {}} 
                        placeholder="Your Email" 
                        value="email" 
                        style={styles.input} 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Date</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        onChangeText={() => {}} 
                        placeholder="Date of Birth" 
                        value="date" 
                        style={styles.input} 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Income Range</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        onChangeText={() => {}} 
                        placeholder="Monthly" 
                        value="income" 
                        style={styles.input} 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Password</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        onChangeText={() => {}} 
                        placeholder="Password" 
                        value="password" 
                        style={styles.input} 
                        />
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.TextContainer}>
                        <Text>Confirm Password</Text>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        onChangeText={() => {}} 
                        placeholder="Your Names" 
                        value="password1" 
                        style={styles.input} 
                        />
                    </View>
                </View>
                
                <View style={styles.ButtonContainer}>
                    <Button
                        styles={styles.Button}
                        title='Sign Up'
                        //title={isSignup ? 'Login' : 'Sign Up'}
                        //color={Colors.accent}
                        onPress={() => {
                        //setIsSignup(prevState => prevState);
                        }}
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

export default RegisterScreen;