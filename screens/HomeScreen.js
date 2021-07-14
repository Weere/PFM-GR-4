import React, {useState} from 'react'
import { View, Text, TextInput,StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
const HomeScreen = props => {
    const pieData = [
        {
            name: 'Shopping',
            population: '5000',
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
        {
            name: 'Bills',
            population: '8000',
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
        {
            name: 'Transport',
            population: '2000',
            color: 'red',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
        {
            name: 'Others',
            population: '800',
            color: '#FFFFFF',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
        {
            name: 'Remaining',
            population: '2000',
            color: 'rgba(0, 0, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
    ]
    const status = 'Okay';
    return(
        <View style={styles.container}>
            <View style={styles.inspiration}>
                <Text>Your Inspirations</Text>
            </View>
            <View style={styles.fields}>
                <Text style={styles.title}>Hey Wray Dray,</Text>
                <Text style={styles.text}>This is your current standings</Text>
                <View style={styles.statuss}>
                    <Text style={styles.title}>STATUS: </Text>
                    <Text style={styles.title}>{status}</Text>
                </View>
            </View>
            <View>
                <PieChart 
                    data={pieData}
                    width={200}
                    height={200}
                    chartConfig={{
                        // backgroundColor: '#E26A00',
                        // backgroundGradientFrom: '#FB8C00',
                        // backgroundGradientTo: '#FFA726',
                        // //decimalPlaces: 2, //optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    accessor='population'
                    backgroundColor='transparent'
                    paddingLeft='15'
                    absolute
                    //radius={100}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inspiration: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        width: '90%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fields: {
        margin: 10,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    statuss: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        alignItems: 'center',
        paddingBottom: 10,
        fontSize: 15
    },
    title: {
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'orange'
    }
});

export default HomeScreen;