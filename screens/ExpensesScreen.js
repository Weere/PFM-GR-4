import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as categoriesActions from "../store/actions/categories";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CATEGORIES from "../data/Categories";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

function ExpensesScreen({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { selectedDay } = route.params;
  const [value, setValues] = useState([]);
  const categories = useSelector(
    (state) => state.category.avaialableCategories
  );
  const dispatch = useDispatch();

  const loadedCategories = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(categoriesActions.fetchCategories());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const willFocusSub = navigation.addListener("focus", loadedCategories);

    return willFocusSub;
  }, [loadedCategories]);

  useEffect(() => {
    setIsLoading(true);
    loadedCategories().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadedCategories]);

  // const deleteHandler = (id) => {
  //   Alert.alert("Are you sure?", "Do you really want to delete this item?", [
  //     { text: "No", style: "default" },
  //     {
  //       text: "Yes",
  //       style: "destructive",
  //       onPress: () => {
  //         dispatch(categoriesActions.deleteCategory(id));
  //       },
  //     },
  //   ]);
  // };

  ///////////////////////////
  //const productId = props.navigation.getParam('productId');

  const dateString = "Wed Aug 05 2021 06:35:45 GMT+0300 (EAT)";

  let date = new Date(dateString);
  const milliseconds = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
  const localTime = new Date(milliseconds);
  localTime.getDate(); // local date
  const num = localTime.getSeconds(); // local hour

  const ExpenseOutput = ({ cat, intial, comm, amt, idnt, ttamt, bal, idi }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
      <ScrollView>
        <View style={styles.contain}>
          <View style={styles.control}>
            <View style={styles.category}>
              <Text style={styles.text}>{cat}</Text>
              <Text style={styles.text}>{ttamt}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setShowDetails((prevState) => !prevState);
                }}
              >
                <Text
                  style={{ color: "orange", fontWeight: "bold", fontSize: 17 }}
                >
                  {showDetails ? "Hide Details" : "Show Details"}
                </Text>
              </TouchableOpacity>
            </View>
            {showDetails && (
              <View>
                <View style={styles.items}>
                  <Text style={styles.text}>{comm}</Text>
                  <Text style={styles.text}>{amt}</Text>
                </View>
                <View style={styles.category}>
                  <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                    <Text>Intial Amont: </Text>
                    <Text>{intial}</Text>
                  </View>
                  <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                    <Text>Balance: </Text>
                    <Text>{bal}</Text>
                  </View>
                </View>
              </View>
            )}
            <Text style={{ paddingVertical: 10, color: "grey" }}>{idnt}</Text>
            <View style={styles.items}>
              <View style={{ marginHorizontal: 30 }}>
                <Button
                  style={styles.Button}
                  color="orange"
                  title={"Save"}
                  onPress={() => {}}
                />
              </View>
              <View style={{ marginHorizontal: 30 }}>
                <Button
                  style={styles.Button}
                  color="red"
                  title={"Delete"}
                  onPress={() => {
                    //deleteHandler;
                    dispatch(categoriesActions.deleteCategory(idi));
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  if (error) {
    return (
      <View style={styles.indicate}>
        <Text>An error occrred!</Text>
        <Button title="Try again" onPress={loadedCategories} color={"orange"} />
      </View>
    );
  }
  if (isLoading) {
    return (
      <View>
        <View
          style={{
            margin: 15,
            paddingLeft: 10,
            marginTop: 30,
            flexDirection: "row",
            backgroundColor: "orange",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Icon.Button
            name="md-menu"
            size={30}
            backgroundColor="orange"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
          <Text style={{ color: "white" }}>{selectedDay}</Text>
        </View>
        <View style={(styles.indicate, { marginTop: 100 })}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      </View>
    );
  }

  if (!isLoading && categories.length === 0) {
    return (
      <View style={styles.indicate}>
        <Text>No items fond. Maybe start adding some!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 15,
          paddingLeft: 10,
          marginTop: 30,
          flexDirection: "row",
          backgroundColor: "orange",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Icon.Button
          name="md-menu"
          size={30}
          backgroundColor="orange"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Text style={{ color: "white" }}>{selectedDay}</Text>
      </View>
      <FlatList
        onRefresh={loadedCategories}
        refreshing={isRefreshing}
        data={categories}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <ExpenseOutput
            idi={itemData.item.id}
            cat={itemData.item.category}
            intial={itemData.item.intialAmount}
            comm={itemData.item.items}
            amt={itemData.item.amount}
            idnt={itemData.item.dateCat}
            ttamt={itemData.item.totalAmount}
            bal={itemData.item.balance}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contain: {
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  control: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",

    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  Button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    padding: 10,
    justifyContent: "center",
  },
  indicate: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExpensesScreen;
