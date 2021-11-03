import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/auth";

export function DrawerContent(props) {
  const dispatch = useDispatch();
  // const size = 33;
  // const color = 'orange';
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* <Text>Main Content</Text> */}
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              {/* <Avatar.Image 
                                source={{
                                    uri: 'location'
                                }}
                                size={50}
                            /> */}
              {/* <Avatar.Image
                source={require("../assets/photes/derik.jpg")}
                size={50}
              /> */}
              <Avatar.Text label="ED" size={50} />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Edwin Dray</Title>
                <Caption style={styles.caption}>@wraydray</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={"orange"} size={35} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark" color={"orange"} size={35} />
              )}
              label="Calendar"
              onPress={() => {
                props.navigation.navigate("CalenderTab");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="book" color={"orange"} size={35} />
              )}
              label="Analysis"
              onPress={() => {
                props.navigation.navigate("AnalysisStack");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="book-outline" color={"orange"} size={35} />
              )}
              label="Transaction Statement"
              onPress={() => {
                props.navigation.navigate("TransactionStack");
              }}
            />
            {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name='bookmark-outline'
                                color={'orange'}
                                size={35}
                                />
                            )}
                            label='Note Book'
                            onPress={() => {props.navigation.navigate('NoteBookStack')}}
                        /> */}
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={"orange"} size={35} />
              )}
              label="Note Book"
              onPress={() => {
                props.navigation.navigate("TabNavigator");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={"orange"} size={35} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("ProfileStack");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={"red"} size={35} />
          )}
          label="Sign Out"
          onPress={() => {
            dispatch(authActions.logout());
            props.navigation.navigate("AuthStack");
          }}
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
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#F4F4F4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
