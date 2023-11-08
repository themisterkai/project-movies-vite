import { PropTypes } from 'prop-types';

export const MoviePoster = ({
  id,
  original_title: originalTitle,
  poster_path: posterPath,
  release_date: releaseDate,
}) => {
  const posterImage = `https://image.tmdb.org/t/p/w500${posterPath}`;
  return (
    <>
      <img src={posterImage} />
    </>
  );
};

MoviePoster.propTypes = {
  id: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};
