import React from 'react';
import {View, ScrollView, StatusBar} from 'react-native';

//Components
import SerchMovie from '../../components/serchMovie';
import RecommendedMovies from '../../components/recommendedMovies';
import TopRated from '../../components/topRated';

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor="#5CA0D3" />

      <View style={{backgroundColor: '#5CA0D3', flex: 1}}>
        <View style={{height: 250, marginHorizontal: 10, marginTop: 15}}>
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
