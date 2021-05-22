import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const NavigationContainer = styled.View`
  height: 80px;
  border-top-width: 1px;
  border-top-color: #ccc;
  justify-content: space-evenly;
  align-items: center;
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <Text>This is Nav</Text>
    </NavigationContainer>
  );
};

export default Navigation;
