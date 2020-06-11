import {
  AGREGAR_MOVIES,
  AGREGAR_MOVIES_DESCARGAR_EXITO,
  AGREGAR_MOVIES_ERROR,
  AGREGAR_MOVIES_ERROR_TOP,
  AGREGAR_MOVIES_DESCARGAR_EXITO_TOP,
  AGREGAR_MOVIES_TOP,
} from '../types';
import axios from 'axios';

// token
const tokenApi = 'e4def9cd3aa194e795b42b2225c8a3b1';

//Get movies //recomendados

export function getMovies() {
  return async dispatch => {
    dispatch(donwloadMovies());

    try {
      const urlRecommended = `https://api.themoviedb.org/3/movie/315635/recommendations?api_key=${tokenApi}&language=en-US&page=1`;
      const respuesta = await axios.get(urlRecommended);

      dispatch(donwloadedMovieExit(respuesta.data.results));
    } catch (error) {
      console.log(error);
      dispatch(descargaMovieError());
    }
  };
}

//Actions recomendados

const donwloadMovies = () => ({
  type: AGREGAR_MOVIES,
  payload: true,
});

const donwloadedMovieExit = movies => ({
  type: AGREGAR_MOVIES_DESCARGAR_EXITO,
  payload: movies,
});
const descargaMovieError = () => ({
  type: AGREGAR_MOVIES_ERROR,
  payload: true,
});

//Actions Top rated

export function getMoviesTop() {
  return async dispatch => {
    dispatch(donwloadMovieTop());

    try {
      const urlTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tokenApi}&language=en-US&page=1&region=co`;
      const respuestaTop = await axios.get(urlTop);

      dispatch(donwloadedMovieExitTop(respuestaTop.data.results));
    } catch (error) {
      console.log(error);
      dispatch(descargaMovieErrorTop());
    }
  };
}

const donwloadMovieTop = () => ({
  type: AGREGAR_MOVIES_TOP,
  payload: true,
});

const donwloadedMovieExitTop = moviesTop => ({
  type: AGREGAR_MOVIES_DESCARGAR_EXITO_TOP,
  payload: moviesTop,
});
const descargaMovieErrorTop = () => ({
  type: AGREGAR_MOVIES_ERROR_TOP,
  payload: true,
});
