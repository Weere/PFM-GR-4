import React, {useState} from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
//import Selects from '../components/Selector';
const AddExpensesScreen = props => {

    const data = [
        'Bills',
        'Others',
        'Shopping',
        'Transport',
    ];

    const amount = "T.T Amount to be used";
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

    const displayValue = data[selectedIndex.row];

    const renderOption = (title) => (
        <SelectItem title={title}/>
    );

    const totalItemAmount = 8000;
    const balance = 1000;
    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
            <View  style={styles.inputControl}>
                <Text style={styles.text}>Category:</Text>
                {/* <Selects /> */}
                {/* <Text style={styles.text}>Bills</Text> */}
                <Layout style={styles.cont}>
                    <Select
                        placeholder='Categories'
                        value={displayValue}
                        selectedIndex={selectedIndex}
                        onSelect={index => setSelectedIndex(index)}>
                        {data.map(renderOption)}
                    </Select>
                </Layout>
            </View>
            <TextInput 
                style={styles.input}
                placeholder='T.T Amount'
                onChangeText={()=>{}}
                keyboardType="decimal-pad"
                value={amount}
            />
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
        </ScrollView>
    );
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
        fontSize: 18
    },
    input: {
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
       // width: '30%',
        fontSize: 18,
        color: 'grey',
        marginHorizontal: 20,
        marginBottom: 10
    },
    inputControl: {
        flex: 1,
        flexDirection: 'row',
        //marginHorizontal: 0,
        marginVertical: 20,
        
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        color: 'orange'
    },
    cont: {
        flex: 1,
        minHeight: 40,
        maxWidth: 150,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        backgroundColor: null
    }

});

export default AddExpensesScreen;