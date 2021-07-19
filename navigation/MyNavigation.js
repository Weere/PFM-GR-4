import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import AnalysisScreen from '../screens/AnalysisScreen';
import CalenderScreen from '../screens/CalenderScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import AddExpensesScreen from '../screens/AddExpensesScreen';
import TransactionScreen from '../screens/TransactionScreen';
import NoteBookScreen from '../screens/NoteBookScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { DrawerContent } from "./DrawerContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            {/* <Stack.Screen name="HomeStack" component={HomeStack} /> */}
            {/* <Stack.Screen name="MyDrawer" component={MyDrawer} /> */}
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

const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'orange'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerTitleAlign: 'center',
                title: 'Home',
                headerLeft: () => (
                    <Icon.Button name='md-menu' size={30} 
                    backgroundColor='orange' onPress={() => {navigation.openDrawer()}} />
                )
            }} />
        </Stack.Navigator>
    )
};

const AnalysisStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'orange'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="AnalysisScreen" component={AnalysisScreen} options={{
                headerTitleAlign: 'center',
                title: 'Analysis',
                headerLeft: () => (
                    <Icon.Button name='md-menu' size={30} 
                    backgroundColor='orange' onPress={() => {navigation.openDrawer()}} />
                )
            }} />
        </Stack.Navigator>
    )
};

const TransactionStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'orange'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="TransactionScreen" component={TransactionScreen} options={{
                headerTitleAlign: 'center',
                title: 'Transaction',
                headerLeft: () => (
                    <Icon.Button name='md-menu' size={30} 
                    backgroundColor='orange' onPress={() => {navigation.openDrawer()}} />
                )
            }} />
        </Stack.Navigator>
    )
};

const NoteBookStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'orange'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="NoteBookScreen" component={NoteBookScreen} options={{
                headerTitleAlign: 'center',
                title: 'NoteBook',
                headerLeft: () => (
                    <Icon.Button name='md-menu' size={30} 
                    backgroundColor='orange' onPress={() => {navigation.openDrawer()}} />
                )
            }} />
        </Stack.Navigator>
    )
};

const ProfileStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'orange'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
                headerTitleAlign: 'center',
                title: 'Profile',
                headerLeft: () => (
                    <Icon.Button name='md-menu' size={30} 
                    backgroundColor='orange' onPress={() => {navigation.openDrawer()}} />
                )
            }} />
        </Stack.Navigator>
    )
};

 const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={props => <DrawerContent {...props} />} >
            <Drawer.Screen name="AuthStack" component={AuthStack} />
            <Drawer.Screen name="HomeScreen" component={HomeStack} />
            <Drawer.Screen name="CalenderTab" component={CalenderTab} />
            <Drawer.Screen name="AnalysisStack" component={AnalysisStack} />
            <Drawer.Screen name="TransactionStack" component={TransactionStack} />
            <Drawer.Screen name="NoteBookStack" component={NoteBookStack} />
            <Drawer.Screen name="ProfileStack" component={ProfileStack} />
        </Drawer.Navigator>
    )
};

export default MyDrawer;

// const MainNavigator = createSwitchNavigator({
//     Startup: StartupScreen,
//     Auth: AuthNavigator,
//     Shop: ShopNavigator
//   });
export const MyNavigation = () => {
    return (
        <NavigationContainer>
            <MyDrawer.NavigationContainer />
            <AuthStack.NavigationContainer />
        </NavigationContainer>
    )
}
//export default MyNavigation;