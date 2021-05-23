import React from 'react';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const HeaderContainer = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 140px;
  height: 40px;
`;

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo source={require('../../assets/instagram-logo.png')} />
      </LogoContainer>
      <ButtonContainer>
        <FeatherIcon name="send" size={28} color="black" />
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
