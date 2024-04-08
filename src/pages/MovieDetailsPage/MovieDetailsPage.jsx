import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { searchMovieDetails } from "../../helpers/searchMoviesApi";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    const searchMovies = async () => {
      try {
        const response = await searchMovieDetails(movieId);
        setMovies(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      <Link to={backLink.current}>Go back</Link>
      {movies && <MovieDetails movies={movies} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
