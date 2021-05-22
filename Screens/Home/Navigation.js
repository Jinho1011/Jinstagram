import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const NavigationContainer = styled.View`
  height: 80px;
  background-color: blue;
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <Text>This is Nav</Text>
    </NavigationContainer>
  );
};

export default Navigation;
