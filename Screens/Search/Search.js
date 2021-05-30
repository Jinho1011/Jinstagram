import React from 'react';
import {Text, View} from 'react-native';
import {createClient} from 'pexels';
import styled from 'styled-components/native';

const client = createClient(
  '563492ad6f9170000100000114ae060992d245308425261a12758383',
);

client.videos.popular({per_page: 1, max_duration: 20}).then(videos => {
  videos = videos.videos[0].video_files;

  for (var video of videos) {
    console.log(video);
  }
});

const gridComponentA = props => {};

const Search = () => {
  return (
    <View>
      <Text>This is Search</Text>
    </View>
  );
};

export default Search;
