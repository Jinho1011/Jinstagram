import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const NavigationContainer = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  border-top-width: 1px;
  border-top-color: #ccc;
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <FoundationIcon name="home" size={28} color="black" />
      <FeatherIcon name="search" size={28} color="black" />
      <FeatherIcon name="plus-square" size={28} color="black" />
      <FeatherIcon name="heart" size={28} color="black" />
      <FeatherIcon name="user" size={28} color="black" />
    </NavigationContainer>
  );
};

export default Navigation;
