const MovieDetails = ({ movies }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genre_ids,
  } = movies;
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  return (
    <section>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
          width={250}
        />
      </div>
      <div>
        {/* <h2>{`${title} (${release_date.split("-")[0]})`}</h2> */}
        <p>{`User Store: ${Math.round(vote_average * 10)}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genre_ids}</p>
      </div>
    </section>
  );
};

export default MovieDetails;
