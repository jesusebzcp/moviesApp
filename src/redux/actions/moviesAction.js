import {
  AGREGAR_MOVIES,
  AGREGAR_MOVIES_EXITO,
  AGREGAR_MOVIES_DESCARGAR_EXITO,
  AGREGAR_MOVIES_ERROR,
} from '../types';
import axios from 'axios';
import apiMoviesRecommended from '../../config/axios';
//Api
const token = 'e4def9cd3aa194e795b42b2225c8a3b1';

//Get movies
export function getMovies() {
  return async dispatch => {
    dispatch(donwloadMovies());

    try {
      const urlRecommended = `https://api.themoviedb.org/3/movie/2/recommendations?api_key=${token}&language=en-US&page=1`;
      const respuesta = await axios.get(urlRecommended);
      console.log(respuesta.data.results);
      dispatch(donwloadedMovieExit(respuesta.data.results));
    } catch (error) {
      console.log(error);
    }
  };
}

const donwloadMovies = () => ({
  type: AGREGAR_MOVIES,
  payload: true,
});

const donwloadedMovieExit = movies => ({
  type: AGREGAR_MOVIES_DESCARGAR_EXITO,
  payload: movies,
});
