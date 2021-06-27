import React from 'react'
import { StyleSheet,View, Text, Button } from 'react-native'

import {global} from '../styles/global';

const Task = ({navigation}) => {
    const popHandler = () => {
        navigation.pop()
        //navigation.goBack
    }

    const pushHandler = () => {
        //Not recommended since shows back on the home screen.
        navigation.push("Home")
    }
return (
<View style={global.container}>
<Text>Task</Text>
<Button title="go to home POP" onPress={popHandler} />

<Button title="go to Home PUSH" onPress={pushHandler} />
</View>
)
}

export default Task