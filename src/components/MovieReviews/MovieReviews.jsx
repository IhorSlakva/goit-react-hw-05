import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();

  return <div>MovieReviews</div>;
};

export default MovieReviews;
