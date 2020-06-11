import React, {useEffect, Fragment} from 'react';
import {Text, View, Image, ScrollView, ActivityIndicator} from 'react-native';
import {Grid, Col} from 'native-base';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../../redux/actions/moviesAction';
import Recommended from './recommended';

const RecommendedMovies = () => {
  //Hooks dispach
  const dispatch = useDispatch();

  //Cargamos las movies con un efecto al cargar la pantalla
  useEffect(() => {
    cargarMovies();
  }, []);

  //consultar api
  const cargarMovies = () => dispatch(getMovies());

  //Obetenr state
  const movies = useSelector(state => state.movies.recomendados);

  return (
    <View style={{flrex: 1, marginTop: 30, marginLeft: 30}}>
      <Grid>
        <Col>
          <Text
            style={{
              color: 'white',
              textTransform: 'uppercase',
              marginBottom: 20,
              fontSize: 12,
            }}>
            Recommended FOR YOU
          </Text>
        </Col>
        <Col>
          <Text style={{marginLeft: '60%', color: 'gray', fontSize: 12}}>
            All sell
          </Text>
        </Col>
      </Grid>

      <ScrollView horizontal>
        {movies.map(movie => {
          return (
            <Fragment key={movie.id}>
              <Recommended movie={movie} />
            </Fragment>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RecommendedMovies;
