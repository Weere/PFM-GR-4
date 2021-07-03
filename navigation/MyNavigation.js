import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import LoginScreen from '../screens/LoginScreen';
import AppWrapper from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import AnalysisScreen from '../screens/AnalysisScreen';
import CalenderScreen from '../screens/CalenderScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import AddExpensesScreen from '../screens/AddExpensesScreen';
import TransactionScreen from '../screens/TransactionScreen';
import NoteBookScreen from '../screens/NoteBookScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// const navigationOptions = () => {

// }

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="AppWrapper" component={AppWrapper} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
};

const CalenderTab = () => {
    return (
        <Tab.Navigator initialRouteName="CalenderScreen">
            <Stack.Screen name="CalenderScreen" component={CalenderScreen} />
            <Stack.Screen name="ExpensesScreen" component={ExpensesScreen} />
            <Stack.Screen name="AddExpensesScreen" component={AddExpensesScreen} />
        </Tab.Navigator>
    )
};

const AnalysisStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="AnalysisScreen" component={AnalysisScreen} />
        </Stack.Navigator>
    )
};

const TransactionStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
        </Stack.Navigator>
    )
};

const NoteBookStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="NoteBookScreen" component={NoteBookScreen} />
        </Stack.Navigator>
    )
};

const ProfileStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    )
};

const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="AnalysisStack" >
            <Drawer.Screen name="AuthStack" component={AuthStack} />
            <Drawer.Screen name="CalenderTab" component={CalenderTab} />
            <Drawer.Screen name="AnalysisStack" component={AnalysisStack} />
            <Drawer.Screen name="TransactionStack" component={TransactionStack} />
            <Drawer.Screen name="NoteBookStack" component={NoteBookStack} />
            <Drawer.Screen name="ProfileStack" component={ProfileStack} />
        </Drawer.Navigator>
    )
};

export default MyDrawer;