import React, {useState} from 'react'
import { useFocusEffect ,useNavigation } from '@react-navigation/native'
//import { Button, Divider, List, ListItem, Text } from '@ui-kitten/components'
import { View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from 'react-native';
import { Divider } from 'react-native-paper';

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
        // <ListItem
        //     //title={`${item.title} ${index + 1}`}
        //     //description={`${item.description} ${index + 1}`}
        //     title={<Text category="h5" >{item}</Text>}
        //     onPress={() => navigation.navigate("Note", {
        //         singleNote: item
        //     })}
        // />
        <TouchableOpacity 
            onPress={() => navigation.navigate("NOTE", {singleNote: item})} >
            <Text>{item}</Text>
        </TouchableOpacity>
    );

    return(
        // <View style={{ backgroundColor: "#222B45", flex: 1 }}>
        //     <Text style={styles.title} category="h1">
        //         Notes
        //     </Text>
        //     <List 
        //         style={styles.container}
        //         data={notes.reverse()}
        //         ItemSeparatorComponent={Divider}
        //         renderItem={renderItem}
        //     />
        // </View>
        <View style={{ backgroundColor: "#222B45", flex: 1 }}>
        <Text style={styles.title} >Notes</Text>
        
        <FlatList
            style={styles.container}
            data={notes.reverse()}
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
        marginTop: 50
    },
    notes: {
        fontSize: 24
    }
});