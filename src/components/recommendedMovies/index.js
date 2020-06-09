import React, {useEffect} from 'react';
import {Text} from 'react-native';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../../redux/actions/moviesAction';

const RecommendedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    cargarMovies();
  }, []);

  //consultar api
  const cargarMovies = () => dispatch(getMovies());

  return <Text>desde recomendado</Text>;
};

export default RecommendedMovies;
