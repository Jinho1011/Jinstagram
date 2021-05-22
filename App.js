import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styled from 'styled-components/native';

import Header from './Screens/Home/Header';
import Post from './Screens/Home/Post';
import Navigation from './Screens/Home/Navigation';

const Home = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const App = () => {
  return (
    <Home>
      <Header></Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </ScrollView>
      <Navigation></Navigation>
    </Home>
  );
};

export default App;
