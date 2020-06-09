import axios from 'axios';

const apiMoviesRecommended = axios.create({
  urlRecommended: `https://api.themoviedb.org/3/movie/2/recommendations?api_key=${token}&language=en-US&page=1`,
});
export default apiMoviesRecommended;
