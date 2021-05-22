import React from 'react';
import {StatusBar, Text, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text>THIS IS HEADER</Text>
    </View>
  );
};

const Post = () => {
  return (
    <View>
      <Text>THIS IS POST</Text>
    </View>
  );
};

const PostContainer = () => {
  return (
    <View>
      <Post></Post>
    </View>
  );
};

const Navigation = () => {
  return (
    <View>
      <Text>This is Nav</Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Header></Header>
      <PostContainer></PostContainer>
      <Navigation></Navigation>
    </View>
  );
};

export default App;
