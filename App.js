import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyDrawer from './navigation/MyNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
