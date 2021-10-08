import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ExpenseOutput = ({ cat, intial, comm, amt, idnt }) => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.control}>
                    <View style={styles.category}>
                        <Text style={styles.text}>{cat}</Text>
                        <Text style={styles.text}>{intial}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{setShowDetails(prevState => !prevState);}}
                        >
                            <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 17}}>{showDetails ? 'Hide Details' : 'Show Details'}</Text>
                        </TouchableOpacity>
                    </View>
                    {showDetails && (
                        <View style={styles.items}>
                            {/* <View > */}
                                <Text style={styles.text}>{comm}</Text>
                            {/* </View> */}
                            {/* <View > */}
                                <Text style={styles.text}>{amt}</Text>
                            {/* </View> */}
                            <TouchableOpacity
                                style={styles.button}
                                onPress={()=>{}}
                            >
                                <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 15}}>Done</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={()=>{}}
                            >
                                <Text style={{color: 'red', fontWeight: 'bold', fontSize: 15}}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    <Text style={{paddingTop: 5}}>{idnt}</Text>
                    <View style={styles.items}>
                    <View style={{marginHorizontal: 30}}>
                    <Button 
                        style={styles.Button}
                        color='orange'
                        title={'Save'}
                        onPress={() => { }} 
                    />
                    </View>
                    <View style={{marginHorizontal: 30}}>
                    <Button 
                        style={styles.Button}
                        color='red'
                        title={'Delete'}
                        onPress={() => { }} 
                    />
                    </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    control: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        width: '100%',

        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 5
    },
    category: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    text: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    Button: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    button: {
        padding: 10,
        justifyContent: 'center'
    }
});

export default ExpenseOutput;