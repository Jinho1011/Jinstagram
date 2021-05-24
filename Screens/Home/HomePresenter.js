import React from 'react';
import {Text, ScrollView} from 'react-native';

import styled from 'styled-components/native';

import Header from './Header';
import Post from './Post';
import Navigation from './Navigation';

const Home = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const HomePresenter = () => {
  return (
    <Home>
      <Header></Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Post></Post>
        <Post></Post>
      </ScrollView>
    </Home>
  );
};

export default HomePresenter;
