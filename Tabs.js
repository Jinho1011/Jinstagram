import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePresenter from './Screens/Home/HomePresenter';
import SearchPresenter from './Screens/Search/Search';
import UploadPresenter from './Screens/Upload/Upload';
import FavPresenter from './Screens/Favorite/Fav';
import UserPresenter from './Screens/User/User';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Upload') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Fav') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={28} color={'#242424'} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomePresenter} />
      <Tab.Screen name="Search" component={SearchPresenter} />
      <Tab.Screen name="Upload" component={UploadPresenter} />
      <Tab.Screen name="Fav" component={FavPresenter} />
      <Tab.Screen name="User" component={UserPresenter} />
    </Tab.Navigator>
  );
};
