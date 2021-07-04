import { rgba } from 'jimp';
import { opacity } from 'jimp';
import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const AnalysisScreen = props => {
    const periodAmount = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43, 60],
                strokeWidith: 2, // optional
            }
        ]
    };

    const percentageItems = {
        labels: ['Shop', 'T.P', 'Bills', 'Others', 'Savings'],
        datasets: [
            {
                data: [30, 10, 25, 15, 20],
                strokeWidith: 2, // optional
            }
        ]
    };

    return(
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.formComponent}>
                    <View style={styles.component}>
                        <Text style={styles.text}>Since:</Text>
                        <TextInput 
                            style={styles.input} 
                            value={"datePk"} 
                            onChangeText={() => {}}
                            placeholder="DD/MM/YYYY" 
                            keyboardType="default"
                        />
                    </View>
                    <View style={styles.component}>
                        <Text style={styles.text}>According To:</Text>
                        <TextInput 
                            style={styles.input} 
                            value={"period"} 
                            onChangeText={() => {}}
                            placeholder="Monthly" 
                            keyboardType="default"
                        />
                    </View>
                </View>
                <ScrollView horizontal={true} >
                    <View>
                        <Text style={styles.title}>
                            Total expenditure in a week
                        </Text>
                        <LineChart 
                            data={periodAmount}
                            width={Dimensions.get('window').width}
                            height={220}
                            yAxisLabel={'$'}
                            chartConfig={{
                                backgroundColor: '#E26A00',
                                backgroundGradientFrom: '#FB8C00',
                                backgroundGradientTo: '#FFA726',
                                decimalPlaces: 2, //optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>
                </ScrollView>
                <ScrollView horizontal={true}>
                    <View>
                        <Text style={styles.title}>
                            Percentage expenditure in a week
                        </Text>
                        <LineChart 
                            data={percentageItems}
                            width={Dimensions.get('window').width}
                            height={220}
                            yAxisLabel={'%'}
                            chartConfig={{
                                backgroundColor: '#E26A00',
                                backgroundGradientFrom: '#FB8C00',
                                backgroundGradientTo: '#FFA726',
                                decimalPlaces: 2, //optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>
                </ScrollView>
                <View>
                    <Text style={styles.text}>Comment: Your progressing well.</Text>
                </View>
            </View>
        </ScrollView>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    formComponent: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    component: {
        flexDirection: 'row',
        margin: 10,
        alignContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontWeight: "200"
    },
    title: {
        textAlign: 'justify',
        fontStyle: 'italic',
        fontWeight: "400"
    },
    input: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#DADAE8',
        textAlign: 'center'
    }
});

export default AnalysisScreen;