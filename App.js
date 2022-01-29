import React from 'react';
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import Navigation from "./navigation";
import 'react-native-gesture-handler';

const App = () => {
  return(
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar 
          barStyle="light"
          backgroundColor="#B8405E" 
        />
      </SafeAreaProvider>
    </Provider>
  )
  
}

export default App