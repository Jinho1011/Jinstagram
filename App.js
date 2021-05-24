import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePresenter from './Screens/Home/HomePresenter';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Tab" component={Tabs}></Stack.Screen>
        <Stack.Screen name="Home" component={HomePresenter}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
