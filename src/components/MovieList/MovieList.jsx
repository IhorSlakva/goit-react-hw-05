import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={css.section}>
      <h2 className={css.text}>Trending today</h2>
      <ul className={css.list}>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
