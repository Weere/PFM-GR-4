import { rgba } from 'jimp';
import { opacity } from 'jimp';
import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity, ViewPropTypes } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import Trial from '../components/trial';
import DateTimePicker from '@react-native-community/datetimepicker';

const AnalysisScreen = props => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    const onChange = (event, selectedDate) => {
        //const currentDate = selectedDate;
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };
    
    const dateselected = date ? date.toString() : '';
        ////////////////////////////////////////

    
        let dated = new Date(dateselected);
        const milliseconds = Date.UTC(
          dated.getFullYear(),
          dated.getMonth(),
          dated.getDate(),
        );
        const pickedDate = new Date(milliseconds);
        const day = pickedDate.getDate() // local date
        const month = pickedDate.getMonth() // local month
        const year = pickedDate.getFullYear() // local yaer
        
    const data = [
        'Daily',
        'Weekly',
        'Monthly',
        'Yearly'
    ];

    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

    //const displayValue = data[selectedIndex.row];

    const renderOption = (title) => (
        <SelectItem title={title}/>
    );

    const [period, setPeriod] = useState('Daily');
    const [deb, setBeb] = useState('10');
    // const periodAmount = {
    //     labels: lab,
    //     datasets: dat
    // }
    useEffect(() => {
        setPeriod(data[selectedIndex.row]);

        if (period == 'Weekly') {
            setBeb('Weekly');
        } else if( period == 'Monthly' ) {
            setBeb('Monthly');
        } else if( period == 'Yearly' ) {
            setBeb('Yearly');
        } else {
            setBeb('Daily');
        }
    }, )

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

                        {show ? (
                            <DateTimePicker
                            value={date}
                            mode={mode}
                            display="spinner"
                            onChange={onChange}
                            />
                        ) : <Text style={styles.textInput}>{day} {month} {year}</Text>}
                        <View style={styles.control}>
                            <TouchableOpacity onPress={showDatepicker}>
                                <Text style={{color: 'blue', paddingLeft: 10}}>Click to select date</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    
                    <View style={styles.component}>
                        <Text style={styles.text}>According To:</Text>
                        <Layout style={styles.cont}>
                            <Select
                                placeholder='Period'
                                value={period}
                                selectedIndex={selectedIndex}
                                onSelect={index => setSelectedIndex(index)}>
                                {data.map(renderOption)}
                            </Select>
                        </Layout>
                    </View>
                </View>
                
                <View style={styles.formComponent}>
                    <Text style={styles.title}>
                        Total expenditure in a week
                    </Text>
                    {/* <ScrollView horizontal={true} > */}
                        <LineChart 
                            data={periodAmount}
                            width={Dimensions.get('window').width*0.95}
                            //width={100*0.1}
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
                                borderRadius: 16,
                                paddingBottom: 10
                            }}
                        />
                    {/* </ScrollView> */}
                </View>
                
                <View style={styles.formComponent}>
                    <Text style={styles.title}>
                        Percentage expenditure in a week
                    </Text>
                    {/* <ScrollView horizontal={true}> */}
                        <LineChart 
                            data={percentageItems}
                            width={Dimensions.get('window').width*0.95}
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
                                borderRadius: 16,
                                paddingBottom: 10
                            }}
                        />
                    {/* </ScrollView> */}
                </View>
                
                <View style={styles.formComponent}>
                    <Text style={styles.text}>Comment: {deb}Your progressing well.</Text>
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
        //flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontWeight: "900",
        fontSize: 16,
        paddingHorizontal: 10
    },
    title: {
        textAlign: 'justify',
        fontStyle: 'italic',
        fontWeight: "bold",
        fontSize: 18
    },
    input: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#DADAE8',
        textAlign: 'center',
        paddingHorizontal: 10
    },
    cont: {
        minHeight: 40,
        minWidth: 150,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        backgroundColor: null
    }
});

export default AnalysisScreen;