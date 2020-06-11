import React from 'react';
import {View, ScrollView} from 'react-native';
import RecommendedMovies from '../../components/recommendedMovies';
import SerchMovie from '../../components/serchMovie';
import TopRated from '../../components/topRated';

const Home = () => {
  return (
    <>
      <View style={{backgroundColor: '#5CA0D3', flex: 1}}>
        <View style={{height: 250}}>
          <SerchMovie />
        </View>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#2c3848',
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              paddingBottom: 10,
              height: '100%',
            }}>
            <RecommendedMovies />
            <TopRated />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
