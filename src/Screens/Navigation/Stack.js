import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
const {Screen, Navigator} = createStackNavigator();
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import Guide from '../Guide';
import Trip from '../Trip';
import Search from '../Search';

const Stack = () => {
  return (
    <View>
      <Navigator>
        <Screen
          name={'home'}
          component={Home}
          options={{
            // title: '-----------',
            headerStyle: {
              backgroundColor: '#ccc',
            },
            headerTintColor: 'red',
            headerTitleStyle: {
              textAlign: 'center',
              fontWeight: 'bold',
            },
            headerTitle: () => {
              return <Text>Hello</Text>;
            },
            headerRight: () => {
              return <Button title="Right Btn" />;
            },
            headerLeft: () => {
              return (
                <Button
                  title={'Left Btn'}
                  onPress={() => {
                    //
                  }}
                />
              );
            },
          }}
        />
        <Screen name={'search'} component={Search} />
        <Screen name={'trip'} component={Trip} />
        <Screen name={'guide'} component={Guide} />
      </Navigator>
    </View>
  );
};

export default Stack;

const styles = StyleSheet.create({});
