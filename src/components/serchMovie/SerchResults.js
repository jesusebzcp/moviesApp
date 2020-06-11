import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SerchResults = ({keySerch}) => {
  const movie = keySerch;
  const navigation = useNavigation();
  const {title} = movie;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetalleMovie', movie)}>
      <View
        style={{
          backgroundColor: '#283546',
          borderRadius: 10,
          marginVertical: 5,
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}>
        <Text style={{color: 'white'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SerchResults;
