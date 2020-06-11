import React, {useState, useEffect} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {Grid, Text, Button, Col, Row, Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const DetalleMovie = props => {
  const movie = props.route.params;
  const {
    title,
    overview,
    backdrop_path,
    vote_average,
    popularity,
    release_date,
  } = movie;
  console.log(movie);
  const baseUrlImg = 'https://image.tmdb.org/t/p/w500/';

  const [startLike1, setstartLike1] = useState('#fcd401');
  const [startLike2, setstartLike2] = useState('#fcd401');
  const [startLike3, setstartLike3] = useState('#fcd401');
  const [startLike4, setstartLike4] = useState('#fcd401');
  const [startLike5, setstartLike5] = useState('#fcd401');

  const rango = parseInt(vote_average);
  useEffect(() => {
    calificaciones();
  }, []);
  const calificaciones = () => {
    if (rango <= 2) {
      setstartLike5('#545538');
      setstartLike4('#545538');
      setstartLike3('#545538');
      setstartLike2('#545538');
      setstartLike1('#fcd401');
    } else if (rango <= 4) {
      setstartLike5('#545538');
      setstartLike4('#545538');
      setstartLike3('#545538');
      setstartLike2('#fcd401');
      setstartLike1('#fcd401');
    } else if (rango <= 6) {
      setstartLike5('#545538');
      setstartLike4('#545538');
      setstartLike3('#fcd401');
      setstartLike2('#fcd401');
      setstartLike1('#fcd401');
    } else if (rango <= 8) {
      setstartLike5('#545538');
      setstartLike4('#fcd401');
      setstartLike3('#fcd401');
      setstartLike2('#fcd401');
      setstartLike1('#fcd401');
    } else if (rango <= 10) {
      setstartLike5('#fcd401');
      setstartLike4('#fcd401');
      setstartLike3('#fcd401');
      setstartLike2('#fcd401');
      setstartLike1('#fcd401');
    }
  };

  return (
    <>
      <StatusBar hidden />
      <View style={{flex: 1, backgroundColor: '#2c3848'}}>
        <Image
          style={{height: 300, width: '100%'}}
          source={{uri: `${baseUrlImg}${backdrop_path}`}}
        />
        <ScrollView>
          <View style={{marginHorizontal: 20}}>
            <View />
            <Text
              style={{
                marginTop: 30,
                color: 'white',
                textTransform: 'capitalize',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              {title}
            </Text>
            <View />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 20,
              }}>
              <Button
                rounded
                style={{paddingHorizontal: 40, backgroundColor: '#6B7380'}}>
                <Text>WACHT NOW</Text>
              </Button>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    fontSize: 20,
                    color: startLike1,
                  }}
                  name="star"
                />
                <Icon
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    fontSize: 20,
                    color: startLike2,
                  }}
                  name="star"
                />
                <Icon
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    fontSize: 20,
                    color: startLike3,
                  }}
                  name="star"
                />
                <Icon
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    fontSize: 20,
                    color: startLike4,
                  }}
                  name="star"
                />
                <Icon
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    fontSize: 20,
                    color: startLike5,
                  }}
                  name="star"
                />
              </View>
            </View>

            <Text style={{lineHeight: 25, color: 'gray'}}>{overview}</Text>

            <View style={{marginVertical: 10}}>
              <Grid>
                <Row />
                <Col>
                  <Text style={{marginTop: 10, color: 'white'}}>
                    Echo{' '}
                    <Text style={{color: 'gray', marginLeft: 5}}>
                      {' '}
                      {popularity}
                    </Text>
                  </Text>

                  <Text style={{marginTop: 10, color: 'white'}}>
                    fecha
                    <Text style={{color: 'gray', marginLeft: 5}}>
                      {' '}
                      {release_date}
                    </Text>
                  </Text>
                </Col>
              </Grid>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DetalleMovie;
