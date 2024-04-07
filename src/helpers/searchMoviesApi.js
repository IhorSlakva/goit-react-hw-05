import axios from "axios";

const API_KEY = "5b875a5c086b540d33216f5f5e32ef4f";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yjg3NWE1YzA4NmI1NDBkMzMyMTZmNWY1ZTMyZWY0ZiIsInN1YiI6IjY2MTA0NDQ2Zjk0NzViMDE0NzU1ZDE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.382scjEtcSIU_LxGUhptHpNYrD0NW8ToLIl19Uf9TTQ",
  },
};

export const searchTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}`,
    options
  );
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}query=${query}`
  );
  return response.data;
};

export const searchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key${API_KEY}`);
  return response.data;
};
