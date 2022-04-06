import 'react-native-gesture-handler';
import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/Screens/Navigation/Stack';
import Tab from './src/Screens/Navigation/Tab';
import CustomTabNavigator from './src/Screens/Navigation/CustomTab';
const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack /> */}
      {/* <Tab /> */}
      {/* <Text>Hello</Text> */}
      <CustomTabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
