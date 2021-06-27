import { NavigationContainer } from '@react-navigation/native';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MyDrawer from './routes/MyStack';
//import { StyleSheet, Text, View } from 'react-native';
import MyStack from './routes/MyStack';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
