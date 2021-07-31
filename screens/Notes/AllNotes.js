import React, {useState} from 'react'
import { useFocusEffect ,useNavigation } from '@react-navigation/native'
import { Button, Divider, List, ListItem, Text } from '@ui-kitten/components'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 //import AsyncStorage from 'react-native';
//import { Divider } from 'react-native-paper';

export default function AllNotes () {
    const [notes, setNotes] = useState([])
    const navigation = useNavigation()

    useFocusEffect(
        React.useCallback(() => {
            getNotes()
        }, [])
    )

    const getNotes = () => {
        AsyncStorage.getItem("NOTES").then((notes) => {
            setNotes(JSON.parse(notes))
        })
    }

    const renderItem = ({ item, index }) => (
        <ListItem
            //title={`${item.title} ${index + 1}`}
            //description={`${item.description} ${index + 1}`}
            title={<Text category="h5" >{item}</Text>}
            onPress={() => navigation.navigate("Note", {
                singleNote: item
            })}
        />
    );

    return(
        <View style={{ 
            //backgroundColor: "#222B55",
            backgroundColor: 'orange', 
            flex: 1 }}>
            <Text style={styles.title} category="h2">
                NOTES
            </Text>
            <List 
                style={styles.container}
                data={notes}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        fontSize: 20
    },
    item: {
        marginVertical: 4
    },
    title: {
        textAlign: "center",
        marginTop: 35,
        fontStyle: 'normal',
        paddingBottom: 5
    },
    notes: {
        fontSize: 24
    }
});