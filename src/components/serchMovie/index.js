import React from 'react';
import {Item, Input, Text, Icon} from 'native-base';
import {View, StatusBar} from 'react-native';

const SerchMovie = () => {
  return (
    <>
      <StatusBar backgroundColor="#5CA0D3" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
            width: '80%',
            fontWeight: 'bold',
          }}>
          Hello, what do you want to wach?
        </Text>
        <View style={{width: '80%'}}>
          <Item
            rounded
            style={{
              height: 35,
              backgroundColor: '#8EBEE1',
              borderColor: '#8EBEE1',
              marginTop: 15,
            }}>
            <Icon
              style={{
                color: 'white',
                marginLeft: 10,
              }}
              name="search"
            />
            <Input
              style={{color: 'white'}}
              placeholderTextColor="white"
              placeholder="Search "
            />
          </Item>
        </View>
      </View>
    </>
  );
};

export default SerchMovie;
