import axios from "axios";

const API_KEY = "5b875a5c086b540d33216f5f5e32ef4f";

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yjg3NWE1YzA4NmI1NDBkMzMyMTZmNWY1ZTMyZWY0ZiIsInN1YiI6IjY2MTA0NDQ2Zjk0NzViMDE0NzU1ZDE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.382scjEtcSIU_LxGUhptHpNYrD0NW8ToLIl19Uf9TTQ",
  },
};

export const searchTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const response = axios.get(url, options);
  return response.data;
};

console.log(searchTrendingMovies());
