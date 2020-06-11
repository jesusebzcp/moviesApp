//Actions Top rated

export function getMoviesTop() {
  return async dispatch => {
    dispatch(donwloadMovieTop());

    try {
      const urlTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=e4def9cd3aa194e795b42b2225c8a3b1&language=en-US&page=1&region=co`;
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
