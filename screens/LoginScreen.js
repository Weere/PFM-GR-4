import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import InputCustom from "../components/InputCustom";
import * as userActions from "../store/actions/user";
import * as authActions from "../store/actions/auth";

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

const LoginScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  //const user = useSelector(state => state.users.availableUsers);

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const loginHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      // if (!formState.formIsValid) {
      //   Alert.alert("Wrong input!", "Please check the errors in the form.", [
      //     { text: "Okay" },
      //   ]);
      //   return;
      // }

      await dispatch(
        authActions.login(
          formState.inputValues.email,
          formState.inputValues.password
        )
      );
      navigation.navigate("HomeScreen");
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  // const submitHandler = useCallback(() => {
  //   if (!formState.formIsValid) {
  //     Alert.alert("Wrong input!", "Please check the errors in the form.", [
  //       { text: "Okay" },
  //     ]);
  //     return;
  //   }
  //   console.log("Submitting");

  //   dispatch(
  //     userActions.createUser(
  //       formState.inputValues.email,
  //       formState.inputValues.password
  //     )
  //   );
  //   navigation.navigate("HomeScreen");
  // }, [dispatch, formState]);

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

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <InputCustom
          id="email"
          label="Email:"
          errorText="Please enter a valid email!"
          placeholder="Your Email"
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          onInputChange={inputChangeHandler}
          email
        />
        <InputCustom
          id="password"
          label="Password:"
          errorText="Please enter a valid password!"
          placeholder="Password"
          keyboardType="default"
          autoCapitalize="none"
          returnKeyType="next"
          onInputChange={inputChangeHandler}
          secureTextEntry
          minLength={4}
        />
        <View style={styles.ButtonContainer}>
          {isLoading ? (
            <ActivityIndicator size="small" color="orange" />
          ) : (
            <Button
              //color='blue'
              styles={styles.Button}
              title="LOGIN"
              onPress={loginHandler}
            />
          )}
          <View style={styles.space} />
          <Button
            color="orange"
            styles={styles.Button}
            title="SWITCH TO SIGN UP"
            onPress={() => navigation.navigate("RegisterScreen")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  form: {
    padding: 10,

    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    //width: '100%',
  },
  space: {
    height: 10,
  },
});

export default LoginScreen;
