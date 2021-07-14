import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { 
    Avatar, 
    Title, 
    Caption, 
    Paragraph, 
    Drawer, 
    Text, 
    TouchableRipple, 
    Switch 
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Ionicons } from '@expo/vector-icons';

export function DrawerContent(props) {
    const size = 33;
    const color = 'orange';
    return(
        // <View>
        //     <Text>This is a test</Text>
        // </View>
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    {/* <Text>Main Content</Text> */}
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'location'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title} >Edwin Dray</Title>
                                <Caption style={styles.caption} >@wraydray</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name='home-outline'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Home'
                            onPress={() => {props.navigation.navigate('HomeScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name='bookmark'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Calender'
                            onPress={() => {props.navigation.navigate('CalenderTab')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name='book'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Analysis'
                            onPress={() => {props.navigation.navigate('AnalysisStack')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name='book-outline'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Transaction Statment'
                            onPress={() => {props.navigation.navigate('TransactionStack')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name='bookmark-outline'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Note Book'
                            onPress={() => {props.navigation.navigate('NoteBookStack')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name='account-outline'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Profile'
                            onPress={() => {props.navigation.navigate('ProfileStack')}}
                            />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} >
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app"
                        color= {color}
                        size= {size}
                        />
                    )}
                    label='Sign Out'
                    onPress={() => {props.navigation.navigate('LoginScreen')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#F4F4F4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});