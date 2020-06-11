import React, {useEffect, Fragment} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Grid, Col} from 'native-base';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {getMoviesTop} from '../../redux/actions/moviesAction';
import TopRatedComponent from './TopRatedComponent';

const TopRated = () => {
  //Hooks dispach
  const dispatch = useDispatch();

  //Cargamos las movies con un efecto al cargar la pantalla
  useEffect(() => {
    cargarMovies();
  }, []);

  //consultar api
  const cargarMovies = () => dispatch(getMoviesTop());

  //Obetenr state
  const moviesTop = useSelector(state => state.movies.topRated);

  return (
    <View style={{flex: 1, marginTop: 30, marginLeft: 30}}>
      <Grid>
        <Col>
          <Text
            style={{
              color: 'white',
              textTransform: 'uppercase',
              marginBottom: 20,
              fontSize: 12,
            }}>
            Top Rated
          </Text>
        </Col>
        <Col>
          <Text style={{marginLeft: '60%', color: 'gray', fontSize: 12}}>
            All sell
          </Text>
        </Col>
      </Grid>

      <ScrollView horizontal>
        {moviesTop.map(movie => (
          <Fragment key={movie.id}>
            <TopRatedComponent movie={movie} />
          </Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopRated;
