import React, {useState, useEffect, Fragment} from 'react';
import {Item, Input, Text, Icon} from 'native-base';
import {View, ScrollView} from 'react-native';

//Axios para manejar la llamada a la api
import axios from 'axios';

//Components
import SerchResults from './SerchResults';

const SerchMovie = () => {
  //state
  const [serch, setSerch] = useState('');
  const [keySerchs, setKeySerchs] = useState([]);
  console.log(keySerchs);

  //Funciones
  const serchApi = async () => {
    const apiKey = 'e4def9cd3aa194e795b42b2225c8a3b1';
    try {
      const urlSerch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${serch}&page=1&include_adult=false`;
      const respuesta = await axios.get(urlSerch);
      console.log(respuesta);
      setKeySerchs(respuesta.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  //Llamado de la api
  useEffect(() => {
    serchApi();
  }, [serch]);
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {serch === '' ? (
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
        ) : null}

        <View style={{width: '80%', marginVertical: 30}}>
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
              onChangeText={text => setSerch(text)}
              style={{color: 'white'}}
              placeholderTextColor="white"
              placeholder="Search "
            />
          </Item>
          <ScrollView>
            {serch === ''
              ? null
              : keySerchs.map(keySerch => (
                  <Fragment key={keySerch.id}>
                    <SerchResults keySerch={keySerch} />
                  </Fragment>
                ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default SerchMovie;
