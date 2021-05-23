import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('window').width;

const PostContainer = styled.View`
  border-top-width: 1px;
  border-top-color: #ccc;
`;

const PostHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding-left: 16px;
  padding-right: 16px;
`;

const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UserImage = styled.Image`
  width: 36px;
  height: 36px;
`;

const UserNameContainer = styled.View`
  padding-left: 10px;
`;

const UserName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const UserLocation = styled.Text``;

const PostImageContainer = styled.View``;

const PostImage = styled.Image`
  height: ${width}px;
  width: ${width}px;
`;

const PostBody = styled.View``;

const Post = () => {
  return (
    <PostContainer>
      <PostHeader>
        <UserContainer>
          <UserImage source={require('../../assets/user.jpg')}></UserImage>
          <UserNameContainer>
            <UserName>jinhoda_</UserName>
            <UserLocation>Konkuk University</UserLocation>
          </UserNameContainer>
        </UserContainer>
        <EntypoIcon
          name="dots-three-vertical"
          size={20}
          color="black"></EntypoIcon>
      </PostHeader>
      <PostImageContainer>
        <PostImage source={require('../../assets/cat1.jpg')}></PostImage>
      </PostImageContainer>
      <PostBody></PostBody>
    </PostContainer>
  );
};

export default Post;
