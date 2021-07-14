import React, {useState} from 'react'
import { View, Text, Button, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';

const ExpensesScreen = props => {
    const [showDetails, setShowDetails] = useState(false);
    return(
        <ScrollView >
        <View style={styles.container}>
            <View style={styles.control}>
                <View style={styles.category}>
                    <Text style={styles.text}>Shopping</Text>
                    <Text style={styles.text}>5000</Text>
                    <Button 
                        style={styles.Button}
                        title={showDetails ? 'Hide Details' : 'Show Details'}
                        onPress={() => {
                            setShowDetails(prevState => !prevState);
                        }} 
                    />
                </View>
                {showDetails && (
                    <View>
                        <View style={styles.items}>
                            <Text style={styles.text}>Clothes</Text>
                            <Text style={styles.text}>2500</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={()=>{}}
                            >
                                <Text>Done</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={()=>{}}
                            >
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.items}>
                            <Text style={styles.text}>Food</Text>
                            <Text style={styles.text}>2500</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={()=>{}}
                            >
                                <Text>Done</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={()=>{}}
                            >
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                
            </View>
            <View style={styles.control}>
                <View style={styles.category}>
                    <Text style={styles.text}>Bills</Text>
                    <Text style={styles.text}>5000</Text>
                    <Button 
                        style={styles.Button}
                        title={showDetails ? 'Hide Details' : 'Show Details'}
                        onPress={() => {
                            setShowDetails(prevState => !prevState);
                        }} 
                    />
                </View>
                {showDetails && ( 
                    <View style={styles.items}>
                    <Text style={styles.text}>water</Text>
                    <Text style={styles.text}>2500</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{}}
                    >
                        <Text>Done</Text>
                    </TouchableOpacity><TouchableOpacity
                        style={styles.button}
                        onPress={()=>{}}
                    >
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
                )}
                
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
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
        paddingHorizontal: 20,
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

export default ExpensesScreen;