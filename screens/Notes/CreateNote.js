import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
//import { Button } from '@ui-kitten/components'
import { View, Button, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import AsyncStorage from 'react-native';

export default function CreateNote () {
    const [note, setNote] = useState("")
    const navigation = useNavigation()

    const saveNote = async () => {
        const value = await AsyncStorage.getItem("NOTES")
        const n = value ? JSON.parse(value) : []
        n.push(note)
        await AsyncStorage.setItem("NOTE", JSON.stringify(n))
        .then(() => navigation.navigate("AllNotes"))
        setNote("")
    }
    return(
        <View style={styles.container}>
            <TextInput 
                value={note}
                onChangeText={setNote}
                style={{ color: 'white', fontSize: 22, borderBottomColor: 'white', borderBottomWidth: 1 }}
                multiline={true}
                autoFocus
                selectionColor='orange'
            />
            {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bottom} >
                <Button style={styles.button} appearance="filled" onPress={saveNote}>
                    Create Note
                </Button>
            </KeyboardAvoidingView> */}
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bottom} >
            <Button 
                title='Create Note'
                style={styles.button}
                onPress={saveNote}
            />
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222845',
        color: "white",
        padding: 30,
        paddingTop: 80,

        width: Dimensions.get("window").width
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30

    }
});