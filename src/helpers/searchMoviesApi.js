import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  language: "en-US",
};
axios.defaults.headers = {
  Authorization:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yjg3NWE1YzA4NmI1NDBkMzMyMTZmNWY1ZTMyZWY0ZiIsInN1YiI6IjY2MTA0NDQ2Zjk0NzViMDE0NzU1ZDE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.382scjEtcSIU_LxGUhptHpNYrD0NW8ToLIl19Uf9TTQ",
};
const API_KEY = "5b875a5c086b540d33216f5f5e32ef4f";

export const searchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

export const searchMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};

export const searchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data.results;
};

export const searchMovieCredits = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key${API_KEY}`
  );
  return data.results;
};

export const searchMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key${API_KEY}`
  );
  return data.results;
};
