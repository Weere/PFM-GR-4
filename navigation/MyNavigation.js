import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
//import { NavigationContainer } from "@react-navigation/native";
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
import CreateNote from "../screens/Notes/CreateNote";
import AllNotes from "../screens/Notes/AllNotes";
import Note from "../screens/Notes/Note";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
            headerStyle: {
                backgroundColor: 'orange'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{
                headerTitleAlign: 'center',
                title: 'Registration'
            }}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
                headerTitleAlign: 'center',
                title: 'Login'
            }}/>
        </Stack.Navigator>
    )
};

// const CalenderTab = () => {
//     return (
//         <Tab.Navigator initialRouteName="CalenderScreen">
//             <Stack.Screen name="CalenderScreen" component={CalenderScreen} />
//             <Stack.Screen name="ExpensesScreen" component={ExpensesScreen} />
//             <Stack.Screen name="AddExpensesScreen" component={AddExpensesScreen} />
//         </Tab.Navigator>
//     )
// };

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
                ),
                headerRight: () => (
                    <Icon.Button name='md-exit' size={30} color='red'
                    backgroundColor='orange' onPress={() => {navigation.navigate('AuthStack')}} />
                )
            }} />
        </Stack.Navigator>
    )
};

 const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="AuthStack" drawerContent={props => <DrawerContent {...props} />} >
            <Drawer.Screen name="AuthStack" component={AuthStack} />
            <Drawer.Screen name="HomeScreen" component={HomeStack} />
            <Drawer.Screen name="CalenderTab" component={CalenderTab} />
            <Drawer.Screen name="AnalysisStack" component={AnalysisStack} />
            <Drawer.Screen name="TransactionStack" component={TransactionStack} />
            <Drawer.Screen name="NoteBookStack" component={NoteBookStack} />
            <Drawer.Screen name="ProfileStack" component={ProfileStack} />
            <Drawer.Screen name="TabNavigator" component={TabNavigator} />
        </Drawer.Navigator>
    )
};

export default MyDrawer;

// const MainNavigator = createSwitchNavigator({
//     Startup: StartupScreen,
//     Auth: AuthNavigator,
//     Shop: ShopNavigator
//   });
// yy

//  //
const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation 
        selectedIndex={state.index} 
        onSelect={(index) => navigation.navigate(state.routeNames[index])} >
        <BottomNavigationTab title="All Notes" />
        <BottomNavigationTab title="Create" />
    </BottomNavigation>
)

const TabNavigator = () => (
    <Navigator tabBar ={(props) => <BottomTabBar {...props} />}>
        <Screen name="AllNotes" component={AllNotes} />
        <Screen name="Create" component={CreateNote} />
        <Screen name="Note" component={Note} />
    </Navigator>
)

const BottomTabBarCalend = ({navigation, state}) => (
    <BottomNavigation 
        selectedIndex={state.index} 
        onSelect={(index) => navigation.navigate(state.routeNames[index])} >
        <BottomNavigationTab title="Calender" />
        <BottomNavigationTab title="Add Expenditures" />
    </BottomNavigation>
)

const CalenderTab = () => (
    <Navigator tabBar ={(props) => <BottomTabBarCalend {...props} />} initialRouteName="CalenderScreen">
        <Screen name="CalenderStack" component={CalenderStack} />
        <Screen name="AddExpensesStack" component={AddExpensesStack} />
        <Screen name="ExpensesScreen" component={ExpensesScreen} />
    </Navigator>
    );

    const CalenderStack = ({navigation}) => {
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
                <Stack.Screen name="CalenderScreen" component={CalenderScreen} options={{
                    headerTitleAlign: 'center',
                    title: 'Calender',
                    headerLeft: () => (
                        <Icon.Button name='md-menu' size={30} 
                        backgroundColor='orange' onPress={() => {navigation.openDrawer()}} />
                    )
                }} />
            </Stack.Navigator>
        )
    };

    // const ExpensesStack = ({navigation}) => {
    //     return (
    //         <Stack.Navigator screenOptions={{
    //             headerStyle: {
    //                 backgroundColor: 'orange'
    //             },
    //             headerTintColor: '#fff',
    //             headerTitleStyle: {
    //                 fontWeight: 'bold'
    //             }
    //         }}>
    //             <Stack.Screen name="ExpensesScreen" component={ExpensesScreen} options={{
    //                 headerTitleAlign: 'center',
    //                 title: 'Expenses',
    //                 // headerLeft: () => (
    //                 //     <Icon.Button name='md-menu' size={30} 
    //                 //     backgroundColor='orange' onPress={() => {navigation.openDrawer()}} />
    //                 // )
    //             }} />
    //         </Stack.Navigator>
    //     )
    // };
 
    const AddExpensesStack = ({navigation}) => {
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
                <Stack.Screen name="AddExpensesScreen" component={AddExpensesScreen} options={{
                    headerTitleAlign: 'center',
                    title: 'Add Expenses',
                    // headerLeft: () => (
                    //     <Icon.Button name='md-menu' size={30} 
                    //     backgroundColor='orange' onPress={() => {navigation.openDrawer()}} />
                    // )
                }} />
            </Stack.Navigator>
        )
    };

// const TabNavigator = () => {
//     return (
//         <Tab.Navigator initialRouteName="Create">
//             <Stack.Screen name="Create" component={CreateNote} />
//             <Stack.Screen name="AllNotes" component={AllNotes} />
//             <Stack.Screen name="Note" component={Note} />
//         </Tab.Navigator>
//     )
// };