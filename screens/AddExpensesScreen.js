import React, {useState} from 'react'
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native';
//import Selects from '../components/Selector';
const AddExpensesScreen = props => {

    const totalItemAmount = 8000;
    const balance = 1000;
    return(
        <SafeAreaView style={styles.container}>
            <View  style={styles.inputControl}>
                <Text style={styles.text}>Category:</Text>
                {/* <Selects /> */}
                <Text style={styles.text}>Bills</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='T.T Amount to be used'
                    onChangeText={()=>{}}
                    keyboardType="decimal-pad"
                    value='amount'
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    style={styles.button}
                    title='Add Item'
                    onPress={() => {}}
                />
            </View>
            <View style={styles.inputControl}>
                <TextInput
                    style={styles.input}
                     placeholder='Enter item'
                     onChangeText={()=>{}}
                     keyboardType="default"
                     value='item'
                />
                <TextInput
                    style={styles.input}
                     placeholder='Enter amout'
                     onChangeText={()=>{}}
                     keyboardType="number-pad"
                     value='amount'
                />
            </View>
            
            <View style={styles.totalInfo}>
                <View style={styles.controls}>
                    <Text style={styles.text}>T.T amount of items:</Text>
                    <Text style={styles.text}>{totalItemAmount}</Text>
                </View>
                <View style={styles.controls}>
                    <Text style={styles.text}>Balance:</Text>
                    <Text style={styles.text}>{balance}</Text>
                </View>
            </View>
        </SafeAreaView>
    );c
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop: 50,

        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        width: '90%',
    },
    text: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20
    },
    input: {
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
        width: '30%',
        fontSize: 18,
        color: 'grey'
    },
    inputControl: {
        flexDirection: 'row',
        //marginHorizontal: 0,
        marginVertical: 10,
        
    },
    controls: {
        flexDirection: 'row'
    },
    button: {
        color: 'orange'
    }

});

export default AddExpensesScreen;