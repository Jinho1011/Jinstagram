import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  height: 60px;
  flex-direction: row;
  background-color: yellow;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Text>THIS IS HEADER</Text>
    </HeaderContainer>
  );
};

export default Header;
