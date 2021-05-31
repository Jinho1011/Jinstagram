import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SearchPresenter from './SearchPresenter';

export default () => {
  const [media, setMedia] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getPhotos = (API_KEY, page) => {
    return axios
      .get(`https://api.pexels.com/v1/curated?page=${page}&per_page=5`, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then(res => res.data.photos)
      .catch(err => console.log(err));
  };

  const getVideos = (API_KEY, page) => {
    return axios
      .get(
        `https://api.pexels.com/videos/popular?page=1&per_page=${page}&max_duration=20`,
        {
          headers: {
            Authorization: API_KEY,
          },
        },
      )
      .then(res => res.data.videos)
      .catch(err => console.log(err));
  };

  const initMedia = async () => {
    const API_KEY = '563492ad6f9170000100000114ae060992d245308425261a12758383';

    // let photos = await getPhotos(API_KEY, 1); // array
    let photos = [
      {
        avg_color: '#84909C',
        height: 3888,
        id: 7928463,
        liked: false,
        photographer: 'Alex Kozlov',
        photographer_id: 3442124,
        photographer_url: 'https://www.pexels.com/@alex-kozlov-3442124',
        src: {
          landscape:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg',
          portrait:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/blue-and-brown-concrete-building-7928463/',
        width: 2592,
      },
      {
        avg_color: '#FA97BA',
        height: 4288,
        id: 7470334,
        liked: false,
        photographer: 'Leon Huang',
        photographer_id: 37073985,
        photographer_url: 'https://www.pexels.com/@leon-huang-37073985',
        src: {
          landscape:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg',
          portrait:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/pink-and-white-water-drop-7470334/',
        width: 2848,
      },
      {
        avg_color: '#BABCBB',
        height: 4032,
        id: 8054344,
        liked: false,
        photographer: 'kira schwarz',
        photographer_id: 616468,
        photographer_url: 'https://www.pexels.com/@kira-schwarz',
        src: {
          landscape:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg',
          portrait:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/text-8054344/',
        width: 3024,
      },
      {
        avg_color: '#C7C7C7',
        height: 4032,
        id: 8053919,
        liked: false,
        photographer: 'kira schwarz',
        photographer_id: 616468,
        photographer_url: 'https://www.pexels.com/@kira-schwarz',
        src: {
          landscape:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg',
          portrait:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/black-and-red-plastic-bottle-8053919/',
        width: 2268,
      },
      {
        avg_color: '#536E4D',
        height: 4032,
        id: 8054282,
        liked: false,
        photographer: 'kira schwarz',
        photographer_id: 616468,
        photographer_url: 'https://www.pexels.com/@kira-schwarz',
        src: {
          landscape:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg',
          portrait:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/golden-retriever-puppy-on-green-grass-field-8054282/',
        width: 2270,
      },
      {
        avg_color: '#84909C',
        height: 3888,
        id: 7928463,
        liked: false,
        photographer: 'Alex Kozlov',
        photographer_id: 3442124,
        photographer_url: 'https://www.pexels.com/@alex-kozlov-3442124',
        src: {
          landscape:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg',
          portrait:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/7928463/pexels-photo-7928463.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/blue-and-brown-concrete-building-7928463/',
        width: 2592,
      },
      {
        avg_color: '#FA97BA',
        height: 4288,
        id: 7470334,
        liked: false,
        photographer: 'Leon Huang',
        photographer_id: 37073985,
        photographer_url: 'https://www.pexels.com/@leon-huang-37073985',
        src: {
          landscape:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg',
          portrait:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/7470334/pexels-photo-7470334.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/pink-and-white-water-drop-7470334/',
        width: 2848,
      },
      {
        avg_color: '#BABCBB',
        height: 4032,
        id: 8054344,
        liked: false,
        photographer: 'kira schwarz',
        photographer_id: 616468,
        photographer_url: 'https://www.pexels.com/@kira-schwarz',
        src: {
          landscape:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg',
          portrait:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/8054344/pexels-photo-8054344.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/text-8054344/',
        width: 3024,
      },
      {
        avg_color: '#C7C7C7',
        height: 4032,
        id: 8053919,
        liked: false,
        photographer: 'kira schwarz',
        photographer_id: 616468,
        photographer_url: 'https://www.pexels.com/@kira-schwarz',
        src: {
          landscape:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg',
          portrait:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/8053919/pexels-photo-8053919.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/black-and-red-plastic-bottle-8053919/',
        width: 2268,
      },
      {
        avg_color: '#536E4D',
        height: 4032,
        id: 8054282,
        liked: false,
        photographer: 'kira schwarz',
        photographer_id: 616468,
        photographer_url: 'https://www.pexels.com/@kira-schwarz',
        src: {
          landscape:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          large:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          large2x:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&h=350',
          original:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg',
          portrait:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          small:
            'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&h=130',
          tiny: 'https://images.pexels.com/photos/8054282/pexels-photo-8054282.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        url: 'https://www.pexels.com/photo/golden-retriever-puppy-on-green-grass-field-8054282/',
        width: 2270,
      },
    ];

    setMedia(prevMedia => [...prevMedia, ...photos]);
  };

  useEffect(() => {
    initMedia();
    setLoaded(true);
  }, []);

  return <SearchPresenter media={media} loaded={loaded}></SearchPresenter>;
};
