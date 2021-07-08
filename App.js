import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native'; //** */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunK from 'redux-thunk';//** */
import * as Font from 'expo-font';
import { AppLoading } from 'expo' //*** */

import MyDrawer from './navigation/MyNavigation';
import userReducer from './store/reducers/user'

const rootReducer = combineReducers({
  users : userReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunK));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),//** */
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
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
    <Provider store={store} >
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}
