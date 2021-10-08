import React, {useState} from 'react'
import { useFocusEffect ,useNavigation } from '@react-navigation/native'
import { Button, Text } from '@ui-kitten/components'
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Note ({route}) {
    const [notes, setNotes] = useState([])
    const {singleNote} = route.params
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

    const deleteNote = async () => {
        const newNotes = await notes.filter((note) => note !== singleNote)
        await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes))
        .then(() => navigation.navigate("AllNotes"))
    }

    return(
        <View style={{ backgroundColor: "orange", flex: 1 }}>
            <View style={{margin: 10, marginTop: 30, justifyContent: 'center'}}>
                <Text style={styles.title}  category="h3">
                    NOTES
                </Text>
            </View>
            <View style={styles.conBody}>
                <Text style={{ fontSize: 22, margin: 20 }} >
                    {singleNote}
                </Text>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bottom} >
                    <Button style={{width: 300,}} appearance="filled" onPress={deleteNote}>
                        Delete a Note
                    </Button>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        marginVertical: 4
    },
    title: {
        textAlign: "center",
        fontStyle: 'normal',
        color: 'white'
    },
    notes: {
        fontSize: 24
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        alignItems: 'center'
    },
    conBody: {
        backgroundColor: 'white',
        flex: 3
    }
});