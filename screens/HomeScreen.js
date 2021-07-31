import React, {useState} from 'react'
import { View, Text, TextInput,StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
//import SlideshowTest from '../components/ImageSlider';
//import Onboarding from '../components/onboarding';

const HomeScreen = props => {
    const pieData = [
        {
            name: 'Shopping',
            population: 200,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
        {
            name: 'Savings',
            population: 90,
            color: 'yellow',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
        {
            name: 'Bills',
            population: 120,
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
        {
            name: 'Transport',
            population: 80,
            color: 'blue',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
        {
            name: 'Others',
            population: 200,
            color: 'purple',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
        {
            name: 'Remaining',
            population: 310,
            color: 'green',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15
        },
    ]
    const status = 'Okay';
    return(
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.inspiration}>
                <Text>Inspirational messages</Text>
                {/* <SlideshowTest /> */}
                {/* <Onboarding /> */}
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
                    width={350}
                    height={220}
                    chartConfig={{
                        // backgroundColor: '#E26A00',
                        // backgroundGradientFrom: '#FB8C00',
                        // backgroundGradientTo: '#FFA726',
                        // decimalPlaces: 2, //optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(225, 225, 225, ${opacity})`,
                        style: {
                            borderRadius: 6
                        }
                    }}
                    accessor='population'
                    backgroundColor='transparent'
                    paddingLeft={8}
                    absolute
                    //radius={100}
                />
            </View>
            </View>
        </ScrollView>

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
       // backgroundColor: 'white',
        width: '90%',
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        flex: 1
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
        paddingBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'orange'
    }
});

export default HomeScreen;