import React, {useState} from 'react'
import { StyleSheet,View, Text, Button, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {global} from '../styles/global';

const Home = ({navigation}) => {
    
    const [tasks, setTasks] = useState([
        { "task": "HTML", "done": true, "id": "1" }
    ])

    const pressHandler = () => {
        navigation.push("Task")
    }
return (
<View style={global.container}>
<Text>Home</Text>
<Button title="go to Review" onPress={pressHandler} />
</View>
)
}

export default Home