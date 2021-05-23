import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const width = Dimensions.get('window').width;

const PostContainer = styled.View`
  margin-bottom: 18px;
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
  height: ${width * 0.8}px;
  width: ${width}px;
`;

const PostBody = styled.View`
  padding-left: 16px;
  padding-right: 16px;
`;

const BodyIconContainer = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftIcons = styled.View`
  flex-direction: row;
  width: 110px;
  justify-content: space-between;
`;

const RightIcons = styled.View``;

const BodyLikes = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
`;

const BodyContentContainer = styled.View`
  height: 24px;
  flex-direction: row;
`;

const BodyUserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
`;

const BodyContent = styled.Text`
  font-size: 16px;
`;

const BodyCommentContainer = styled.View`
  padding-bottom: 4px;
`;

const BodyComment = styled.View`
  flex-direction: row;
  height: 24px;
`;

const BodyCommentUserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
`;

const BodyCommentContent = styled.Text`
  font-size: 16px;
`;

const BodyDate = styled.Text`
  color: #8e8e8e;
`;

const PostHeaderWrapper = () => {
  return (
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
  );
};

const PostBodyWrapper = () => {
  return (
    <PostBody>
      <BodyIconContainer>
        <LeftIcons>
          <FeatherIcon name="heart" size={26} color="black" />
          <FontAwesomeIcon name="comment-o" size={26} color="black" />
          <FeatherIcon name="send" size={26} color="black" />
        </LeftIcons>
        <RightIcons>
          <FontAwesomeIcon name="bookmark-o" size={26} color="black" />
        </RightIcons>
      </BodyIconContainer>
      <BodyLikes>좋아요 1,385개</BodyLikes>
      <BodyContentContainer>
        <BodyUserName>jinhoda_</BodyUserName>
        <BodyContent>과제가 너무 많다냐옹</BodyContent>
      </BodyContentContainer>
      <BodyCommentContainer>
        <BodyComment>
          <BodyCommentUserName>zilioner83</BodyCommentUserName>
          <BodyCommentContent>큰 거 온다..</BodyCommentContent>
        </BodyComment>
      </BodyCommentContainer>
      <BodyDate>2일 전</BodyDate>
    </PostBody>
  );
};

const Post = () => {
  return (
    <PostContainer>
      <PostHeaderWrapper></PostHeaderWrapper>
      <PostImageContainer>
        <PostImage source={require('../../assets/cat1.jpg')}></PostImage>
      </PostImageContainer>
      <PostBodyWrapper></PostBodyWrapper>
    </PostContainer>
  );
};

export default Post;
