import { rgba } from 'jimp';
import { opacity } from 'jimp';
import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const AnalysisScreen = props => {
    const linedata = {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidith: 2, // optional
            }
        ]
    };
    return(
        <View>
            <View>
                <View>
                    <Text>Since:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={datePk} 
                        onChangeText={() => {}}
                        placeholder="DD/MM/YYYY" 
                        keyboardType="default"
                    />
                </View>
                <View>
                    <Text>According To:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={period} 
                        onChangeText={() => {}}
                        placeholder="Monthly" 
                        keyboardType="default"
                    />
                </View>
            </View>
            <View>
                <Text>
                    Bezier Line chart
                </Text>
                <LineChart 
                    data={linedata}
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
        </View>
        // <View>
        //     <Text>AnalysisScreen</Text>
        // </View>
        );
};

const styles = StyleSheet.create({});

export default AnalysisScreen;