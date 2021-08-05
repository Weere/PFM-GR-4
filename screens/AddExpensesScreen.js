import React, {useState, useCallback, useEffect} from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, ScrollView, FlatList } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
//import Selects from '../components/Selector';
import * as categoriesActions from '../store/actions/categories';
import Trial from '../components/trial';

const AddExpensesScreen = props => {
    const categories = useSelector(state => state.category.avaialableCategories);
    const dispatch = useDispatch();

    const [category, setCategory] = useState('');
    const [intialAmount, setIntiatalAmount] = useState('');
    const [items, setItems] = useState('');
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);

   const [enteredItems, setEnteredItems] = useState([]);
   const [enteredAmount, setEnteredAmount] = useState([]);
   const [totalAmount, setTotalAmount] = useState(0);

   const data = [
       'Bills',
       'Others',
       'Shopping',
       'Transport',
    ];
    
    const addItem = () => {
        console.log('hello');
        setEnteredAmount(currentAmount => [...currentAmount, amount]);
        setEnteredItems(currentItems => [...currentItems, items]);
        const ret = +totalAmount;
        const amt = +amount;
        setTotalAmount(ret + amt);
       // setBalance(intialAmount - ret);
    };
    
    useEffect(() => {
        setBalance(intialAmount - (+totalAmount));
    }, [addItem])

    const submitHandler = useCallback(() => {
        //callback
        setCategory(displayValue);
        dispatch(
            categoriesActions.createCategory(category, intialAmount, items, amount, balance)
            );
            console.log(category);
            
            //props.navigation.navigate("ExpensesScreen")
        }, [dispatch, category, intialAmount, items, amount, balance]
        );
        
        // useEffect(() => {
            //     props.navigation.setParams({ submit: submitHandler });
            // }, [submitHandler])
            
    // { value: 'orchestra', label: 'Orchestra' } 
    // { value: 'blues', label: 'Blues' },
    // { value: 'rock', label: 'Rock' },
    // { value: 'jazz', label: 'Jazz' },

    //const amount = "T.T Amount to be used";
    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

    const displayValue = data[selectedIndex.row];

    const renderOption = (title) => (
        <SelectItem title={title}/>
    );

    //const totalItemAmount = 8000;
    // setBalance(intialAmount)
    //const balance = 56;
    return(
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Add Expenditures</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <Trial label='Select Date' />
                    <View  style={styles.controls}>
                        <Text style={styles.text}>Category:</Text>
                        <Layout style={styles.cont} level='1'>
                            <Select
                                placeholder='Categories'
                                value={displayValue}
                                selectedIndex={selectedIndex}
                                onSelect={index => setSelectedIndex(index)}>
                                {data.map(renderOption)}
                            </Select>
                        </Layout>
                    </View>
                    <View  style={styles.inputControl}>
                        <TextInput 
                            style={styles.input}
                            placeholder='T.T Amount'
                            onChangeText={text=> setIntiatalAmount(text) }
                            keyboardType="decimal-pad"
                            value={intialAmount}
                        />
                        <Button 
                            style={styles.button}
                            title='Add Item'
                            onPress={addItem}
                            color='orange'
                        />
                    </View>
                    <View style={styles.inputControl}>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter item'
                            onChangeText={text=> setItems(text)}
                            keyboardType="default"
                            value={items}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Enter amout'
                            onChangeText={text=> setAmount(text)}
                            keyboardType="number-pad"
                            value={amount}
                        />
                    </View>
                    <ScrollView>
                        <View style={styles.inputControl}>
                            <View style={styles.output}>
                                {enteredItems.map((con) => <Text style={styles.text}>{con}</Text>)}
                            </View>
                            <View>
                                {enteredAmount.map((cont) => <Text style={styles.text}>{cont}</Text>)}
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.totalInfo}>
                        <Text style={styles.text}>T.T amount of items: {totalAmount}</Text>
                        <View style={styles.controls}>
                            <Text style={styles.text}>Balance: {balance}</Text>
                            <Button 
                                style={styles.button}
                                title='Save'
                                onPress={submitHandler}
                                color='orange'
                            />
                        </View>
                        {/* <FlatList 
                            data={category}
                            keyExtractor={item => item.id}
                            renderItem={itemData => (
                                <View>
                                    <Text>{itemData.item.category}</Text>
                                    <Text>{itemData.item.intialAmount}</Text>
                                    <Text>{itemData.item.items}</Text>
                                    <Text>{itemData.item.amount}</Text>
                                </View>
                            )}
                        /> */}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '15%',
        backgroundColor: 'orange'
    },
    container: {
        justifyContent: 'center',
        margin: 20,
        paddingVertical: 10,

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
        paddingVertical: 5,
        fontSize: 18
    },
    title: {
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        color: 'white'
    },
    input: {
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
        //width: '30%',
        fontSize: 18,
        color: 'grey',
    },
    inputControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    cont: {
        flex: 1,
        minHeight: 40,
        maxWidth: 150,
        backgroundColor: null
    }
});

export default AddExpensesScreen;