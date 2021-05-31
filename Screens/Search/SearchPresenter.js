import React from 'react';
import {View, Image, ScrollView, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;

const SearchContainer = styled.View`
  flex: 1;
`;

const SearchBar = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 20px;
`;

const GridImageRow = ({photos, loaded}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {loaded ? (
        photos.map(item => {
          if (item != undefined) {
            return (
              <Image
                key={item.id}
                source={{uri: item.src.medium}}
                style={{flex: 1, height: width / 3}}></Image>
            );
          } else {
            return <View style={{flex: 1, height: 100}}></View>;
          }
        })
      ) : (
        <View>
          <View style={{flex: 1, height: 100}}></View>
          <View style={{flex: 1, height: 100}}></View>
          <View style={{flex: 1, height: 100}}></View>
        </View>
      )}
    </View>
  );
};

const GridImages = (media, loaded) => {
  const runCallback = cb => {
    return cb();
  };

  return (
    <ScrollView>
      {runCallback(() => {
        const row = [];
        for (var i = 0; i < media.media.length; i++) {
          const photos = [media.media[i++], media.media[i++], media.media[i]];
          row.push(
            <GridImageRow photos={photos} key={photos[0].id} loaded={loaded} />,
          );
        }
        return row;
      })}
    </ScrollView>
  );
};

const Search = ({media, loaded}) => {
  return (
    <SearchContainer>
      <SearchBar>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon
            name="search"
            size={24}
            style={{
              padding: 10,
            }}></Icon>
        </View>
        <SearchInput placeholder={'Search'}></SearchInput>
      </SearchBar>
      <GridImages media={media} loaded={loaded}></GridImages>
    </SearchContainer>
  );
};

export default Search;
