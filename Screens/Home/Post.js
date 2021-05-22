import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const PostContainer = styled.View`
  height: 200px;
`;

const Post = () => {
  return (
    <PostContainer>
      <Text>THIS IS POST</Text>
    </PostContainer>
  );
};

export default Post;
