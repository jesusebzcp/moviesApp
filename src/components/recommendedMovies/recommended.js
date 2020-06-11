import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon, Grid, Row} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const Recommended = ({movie}) => {
  //Hooks
  const navigation = useNavigation();

  useEffect(() => {
    calificaciones();
  }, []);

  //State
  const [startLike1, setstartLike1] = useState('#fcd401');
  const [startLike2, setstartLike2] = useState('#fcd401');
  const [startLike3, setstartLike3] = useState('#fcd401');
  const [startLike4, setstartLike4] = useState('#fcd401');
  const [startLike5, setstartLike5] = useState('#fcd401');

  //Data
  const {title, poster_path, vote_average} = movie;

  //URL base de la imagenes
  const baseUrlImg = 'https://image.tmdb.org/t/p/w200/';

  //Convertimos el dato en un entero para calcular el puntaje
  const rango = parseInt(vote_average);

  //Funciones
  const calificaciones = () => {
    //Segun la Data de la Api es el resultado
    //Estas condiciones representa una estrella selecionada

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
    <TouchableOpacity
      onPress={() => navigation.navigate('DetalleMovie', movie)}>
      <Image
        style={{height: 200, width: 150, borderRadius: 20, marginRight: 10}}
        source={{uri: `${baseUrlImg}${poster_path}`}}
      />
      <Text style={{color: 'white', marginTop: 8, width: 160}}>{title}</Text>
      <Grid>
        <Row>
          <Icon
            style={{marginLeft: 5, fontSize: 20, color: startLike1}}
            name="star"
          />
          <Icon
            style={{marginLeft: 5, fontSize: 20, color: startLike2}}
            name="star"
          />
          <Icon
            style={{marginLeft: 5, fontSize: 20, color: startLike3}}
            name="star"
          />
          <Icon
            style={{marginLeft: 5, fontSize: 20, color: startLike4}}
            name="star"
          />
          <Icon
            style={{marginLeft: 5, fontSize: 20, color: startLike5}}
            name="star"
          />
        </Row>
      </Grid>
    </TouchableOpacity>
  );
};

export default Recommended;
