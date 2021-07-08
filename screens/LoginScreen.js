import React, {useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import InputCustom from '../components/InputCustom';

const LoginScreen = ({navigation}) => {

    return(
        <View>
            <View>
                <View>
                    <Text>Tel No</Text>
                </View>
                <View>
                    <TextInput 
                    onChangeText={() => {}} 
                    placeholder="Phone Number" 
                    value="telNo" 
                    style={styles.input} 
                    />
                </View>
            </View>
            <View>
                <View>
                    <Text>Email</Text>
                </View>
                <View>
                    <TextInput 
                    onChangeText={() => {}} 
                    placeholder="Your Email" 
                    value="email" 
                    style={styles.input} 
                    />
                </View>
            </View>
            <View>
                <Button
                    title='Login'
                    //title={isSignup ? 'Login' : 'Sign Up'}
                    //color={Colors.accent}
                    onPress={() => {
                    //setIsSignup(prevState => !prevState);
                    }}
                />
                 <Button
                    title='Sign Up'
                    //title={isSignup ? 'Login' : 'Sign Up'}
                    //color={Colors.accent}
                    onPress={()=>navigation.navigate("RegisterScreen")
                    //setIsSignup(prevState => prevState);
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default LoginScreen;

