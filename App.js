import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native"; //** */
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunK from "redux-thunk"; //** */
import * as Font from "expo-font";
import { AppLoading } from "expo"; //*** */

import * as eva from "@eva-design/eva";

import MyDrawer from "./navigation/MyNavigation";
import userReducer from "./store/reducers/user";
import authReducer from "./store/reducers/auth";
import categoriesReducer from "./store/reducers/categories";
import { ApplicationProvider } from "@ui-kitten/components";
//import NavigationContain from "./navigation/NavigationContainer";

const rootReducer = combineReducers({
  users: userReducer,
  category: categoriesReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunK));

const fetchFonts = () => {
  return Font.loadAsync({
    // 'open-sans': require('./constants/fonts/OpenSans-Regular.ttf'),//** */
    // 'open-sans-bold': require('./constants/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (//** */
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={()=> {
  //         setFontLoaded(true);
  //       }}
  //     />
  //   );//** */
  // }
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Provider store={store}>
        <NavigationContainer>
          {/* <NavigationContain /> */}
          <MyDrawer />
        </NavigationContainer>
      </Provider>
    </ApplicationProvider>
  );
}
