import React from 'react';
import {ScrollView} from 'react-native';

import styled from 'styled-components/native';

import Header from './Header';
import Post from './Post';

const Home = styled.View`
  flex: 1;
  background-color: white;
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
        <Post></Post>
      </ScrollView>
    </Home>
  );
};

export default HomePresenter;
