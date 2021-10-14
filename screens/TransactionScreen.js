import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const TransactionScreen = props => {
    const jeric = ['Clothes', ' Bed']
    const Content = {
        tableHead: [ 'Date', 'Category', 'Item', 'Intial Amount', 'Amount Spent', 'Balance'],
        widthArr: [80, 80, 80, 80, 80, 80],
        tableData: [
            [ '20/05/2020', 'Shopping', jeric, 9000, 8000, 1000 ],
            [ '9/12/2020', 'Bills', 'Water', 50000, 48000, 2000 ],
            [ '1/05/2020', 'Transport', 'Transport', 8000, 8000, 0 ],
            [ '24/03/2020', 'Shopping', 'Food', 5000, 8000, -31000 ],
            [ '11/05/2020', 'Others', 'Fees', 1600, 1400, 200 ],
            [ '30/05/2020', 'Bills', 'Electricity', 9000, 8000, 1000 ]
        ]
    };

    return(
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <Table borderStyle={{ borderWidth: 0 }} >
                    <Row
                        data={Content.tableHead}
                        //flexArr={[1, 1, 1, 1, 1, 1]}
                        style={styles.head}
                        textStyle={styles.text}
                        widthArr={Content.widthArr}  
                    />
                    <ScrollView style={styles.dataWrapper}>
                        <TableWrapper style={styles.wrapper} >
                            <Rows
                                data={Content.tableData}
                                //flexArr={[1, 1, 1, 1, 1, 1]}
                                style={styles.row}
                                textStyle={styles.text}
                                widthArr={Content.widthArr} 
                            />
                        </TableWrapper>
                    </ScrollView>
                </Table>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 15, 
        paddingTop: 20, 
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    head: { 
        height: 50, 
        backgroundColor: 'orange' 
    },
    wrapper: { 
        flexDirection: 'row' 
    },
    title: { 
        flex: 1, 
        backgroundColor: '#2ecc71'
    },
    // dataWrapper: { 
    //     marginTop: -1
    // },
    row: {  
        height: 40,
        backgroundColor: '#D7F8DA' 
    }, 
    text: {
        textAlign: 'center',
        fontWeight: '400'
    }
});

export default TransactionScreen;