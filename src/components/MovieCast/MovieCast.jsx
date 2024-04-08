import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { moviedId } = useParams();
  return <div>MovieCast</div>;
};

export default MovieCast;
