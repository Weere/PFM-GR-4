import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import * as categoriesActions from "../store/actions/categories";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddExpensesScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  /////////////////////////////////////
  const [dateCat, setId] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    //const currentDate = selectedDate;
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const dateselected = date ? date.toString() : "";
  ////////////////////////////////////////
  const dispatch = useDispatch();

  const [category, setCategory] = useState("Bills");
  const [intialAmount, setIntiatalAmount] = useState("");
  const [itemEntered, setItemEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [balance, setBalance] = useState(0);

  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const data = ["Bills", "Others", "Shopping", "Transport"];

  // { value: 'orchestra', label: 'Orchestra' }
  // { value: 'blues', label: 'Blues' },
  // { value: 'rock', label: 'Rock' },
  // { value: 'jazz', label: 'Jazz' }

  useEffect(() => {
    setCategory(data[selectedIndex.row]);
    setId(dateselected);
  });

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  const renderOption = (title) => <SelectItem title={title} />;

  const addItem = () => {
    setAmount((currentAmount) => [...currentAmount, amountEntered]);
    setItems((currentItems) => [...currentItems, itemEntered]);
    // { id: Math.random().toString(), value: itemEntered }
    const ret = +totalAmount;
    const amt = +amountEntered;
    setTotalAmount(ret + amt);
    // setBalance(intialAmount - ret);
  };

  useEffect(() => {
    setBalance(intialAmount - +totalAmount);
  }, [addItem]);

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const submitHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(
        categoriesActions.createCategory(
          dateCat,
          category,
          intialAmount,
          items,
          amount,
          balance,
          totalAmount
        )
      );
      props.navigation.navigate("ExpensesScreen");
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.indicate}>
        <ActivityIndicator
          style={styles.indicate}
          size="large"
          color={"orange"}
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          {/* ///////////// */}
          <View>
            <View style={styles.control}>
              <TouchableOpacity onPress={showDatepicker}>
                <Text style={styles.selectText}>Click to select date</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={showTimepicker}>
                <Text style={styles.selectText}>Click to select time</Text>
              </TouchableOpacity>
            </View>

            {show ? (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            ) : (
              <Text style={styles.textInput}>{dateselected}</Text>
            )}
          </View>
          {/* ///////////// */}
          {/* <Trial label='Select Date' /> */}
          <View style={styles.controls}>
            <Text style={styles.text}>Category:</Text>
            <Layout style={styles.cont} level="1">
              <Select
                placeholder="Categories"
                value={category}
                selectedIndex={selectedIndex}
                onSelect={(index) => {
                  setSelectedIndex(index);
                }}
              >
                {data.map(renderOption)}
              </Select>
            </Layout>
          </View>
          <View style={styles.inputControl}>
            <TextInput
              style={styles.input}
              placeholder="Initial Amount"
              onChangeText={(text) => setIntiatalAmount(text)}
              keyboardType="decimal-pad"
              value={String(intialAmount)}
            />
            <Button
              style={styles.button}
              title="Add Item"
              onPress={addItem}
              color="orange"
            />
          </View>
          <View style={styles.inputControl}>
            <TextInput
              style={styles.input}
              placeholder="Enter item"
              onChangeText={(text) => setItemEntered(text)}
              keyboardType="default"
              value={String(itemEntered)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              onChangeText={(text) => setAmountEntered(text)}
              keyboardType="number-pad"
              value={String(amountEntered)}
            />
          </View>
          <ScrollView>
            <View style={styles.inputControl}>
              <View style={styles.output}>
                {items.map((con) => (
                  <Text style={styles.text}>{con}</Text>
                ))}
                {/* {items.map((con) => <Text key={con.idn} style={styles.text}>{con.value}</Text>)} */}
              </View>
              <View>
                {amount.map((cont) => (
                  <Text style={styles.text}>{cont}</Text>
                ))}
              </View>
            </View>
          </ScrollView>
          <View style={styles.totalInfo}>
            <Text style={styles.text}>T.T amount of items: {totalAmount}</Text>
            <View style={styles.controls}>
              <Text style={styles.text}>Balance: {balance}</Text>
              <Button
                style={styles.button}
                title="Save"
                onPress={submitHandler}
                color="orange"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10,
    paddingVertical: 10,

    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    //width: '90%',
  },
  text: {
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 18,
  },
  title: {
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    color: "white",
  },
  input: {
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    //width: '30%',
    fontSize: 18,
    color: "grey",
  },
  inputControl: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  cont: {
    flex: 1,
    minHeight: 40,
    maxWidth: 150,
    backgroundColor: null,
  },
  ///////
  control: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textInput: {
    textAlign: "center",
    paddingBottom: 25,
    color: "orange",
    fontWeight: "bold",
    fontSize: 16,
  },
  selectText: {
    color: "blue",
  },
  indicate: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddExpensesScreen;
