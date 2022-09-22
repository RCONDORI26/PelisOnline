/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Login from './src/screens/Login';
const App = () => {
  return (
    <SafeAreaView>
      <Text> Funcionara?</Text>
      <Login lastName="Regina"/>
    </SafeAreaView>
  );
};

export default App;
