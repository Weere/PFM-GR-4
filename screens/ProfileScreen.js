import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Avatar, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import Trial from "../components/trial";
//import { dateselected } from '../components/trial';
import InputCustom from "../components/InputCustom";
import * as authActions from "../store/actions/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const ProfileScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // useEffect(() => {
  //   const tryUser = async () => {
  //     const userData = await AsyncStorage.getItem("userData");
  //     const transformedData = JSON.parse(userData);
  //     // console.log(transformedData);
  //     const { token, userId, expiryDate } = transformedData;
  //   };
  //   tryUser();
  // }, []);
  /////
  const editedUser = useSelector((state) => state.auth.userInformation);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      userName: editedUser ? editedUser.userName : "",
      telNo: editedUser ? editedUser.telNo : "",
      email: editedUser ? editedUser.email : "",
      date: Trial.dateselected,
      income: editedUser ? editedUser.income : "",
      occupation: editedUser ? editedUser.occupation : "",
      password: editedUser ? editedUser.password : "",
    },
    inputValidities: {
      userName: editedUser ? true : false,
      telNo: editedUser ? true : false,
      email: editedUser ? true : false,
      //date: false,
      income: editedUser ? true : false,
      occupation: editedUser ? true : false,
      password: editedUser ? true : false,
    },
    formIsValid: editedUser ? true : false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const submitHandler = async () => {
    if (formState.inputValues.password !== formState.inputValues.password1) {
      Alert.alert(
        "Password miss match",
        "Please check your passwords if they are the same.",
        [{ text: "Okay" }]
      );
      return;
    }
    if (!formState.formIsValid) {
      Alert.alert("Wrong input!", "Please check the errors in the form.", [
        { text: "Okay" },
      ]);
      return;
    }
    //console.log(formState);
    setError(null);
    setIsLoading(true);
    try {
      // await dispatch(
      //   authActions.updateEmailPassword(
      //     formState.inputValues.email,
      //     formState.inputValues.password
      //   )
      // );
      await dispatch(
        authActions.updateUser(
          formState.inputValues.userName,
          formState.inputValues.telNo,
          formState.inputValues.date,
          formState.inputValues.income,
          formState.inputValues.occupation
        )
      );
      navigation.navigate("HomeScreen");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.form}>
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              <Avatar.Text label="ED" size={100} />
              {/* <Avatar.Image
                source={require("../assets/photes/derik.jpg")}
                size={100}
              /> */}
            </View>
            {/* <KeyboardAvoidingView behavior="height" 
                                keyboardVerticalOffset={50}
                                > */}

            <InputCustom
              id="userName"
              label="Name:"
              errorText="Please enter a valid name!"
              //placeholder="Your Name"
              keyboardType="default"
              autoCapitalize="words"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              initialValue={editedUser ? editedUser.userName : ""}
              initiallyValid={!!editedUser}
              required
            />
            <InputCustom
              id="telNo"
              label="Phone Number:"
              errorText="Please enter a valid phone number!"
              //placeholder="256*******"
              keyboardType="decimal-pad"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              num
              initialValue={editedUser ? editedUser.telNo : ""}
              initiallyValid={!!editedUser}
              required
            />
            <InputCustom
              id="email"
              label="Email:"
              errorText="Please enter a valid email!"
              //placeholder="Your Email"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              email
              initialValue={editedUser ? editedUser.email : ""}
              initiallyValid={!!editedUser}
              required
            />
            <InputCustom
              id="income"
              label="Income:"
              errorText="Please enter a valid amount!"
              //placeholder="Monthly"
              keyboardType="decimal-pad"
              autoCapitalize="none"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              min={0.1}
              num
              initialValue={editedUser ? editedUser.income : ""}
              initiallyValid={!!editedUser}
              required
            />
            <InputCustom
              id="occupation"
              label="Occupation:"
              errorText="Please enter a valid occupation!"
              //placeholder="Your occupation"
              keyboardType="default"
              autoCapitalize="words"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              initialValue={editedUser ? editedUser.occupation : ""}
              initiallyValid={!!editedUser}
              required
              // initiallyValid = {false}
            />
            <InputCustom
              id="password"
              label="Change password:"
              errorText="Please enter a valid password!"
              //placeholder="Password"
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              secureTextEntry
              minLength={4}
              initialValue={editedUser ? editedUser.password : ""}
              initiallyValid={!!editedUser}
              required
            />
            <InputCustom
              id="password1"
              label="Confirm Password:"
              errorText="Please enter a valid password!"
              //placeholder="Password"
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
              onInputChange={inputChangeHandler}
              secureTextEntry
              minLength={4}
              initialValue=""
              required
            />

            <Trial label="Date of Birth" />
            {/* </KeyboardAvoidingView> */}

            <View style={styles.ButtonContainer}>
              <View style={{ width: 100 }}>
                <Button
                  //color='blue'
                  style={styles.button}
                  title="UPDATE"
                  onPress={submitHandler}
                />
              </View>
              <View style={{ width: 100 }}>
                <Button
                  color="orange"
                  style={styles.button}
                  title="CANCEL"
                  onPress={() => navigation.navigate("ProfileStack")}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  form: {
    //    // justifyContent: 'center',
    //     //margin: 20,
    flex: 1,
    //     justifyContent: 'center',
    //     //alignItems: 'center',
    //     marginHorizontal: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    //     //padding: 10,
    //     paddingBottom: 20,

    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;

//https://expo.io/@/projects/ManageMyFinance
