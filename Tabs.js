import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePresenter from './Screens/Home/HomePresenter';

const Tabs = createBottomTabNavigator();

export default ({route, navigation}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomePresenter} />
    </Tabs.Navigator>
  );
};
