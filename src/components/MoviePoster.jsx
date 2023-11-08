import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { HoverOverlay } from './HoverOverlay';

export const MoviePoster = ({
  id,
  original_title: originalTitle,
  poster_path: posterPath,
  release_date: releaseDate,
}) => {
  const posterImage = `https://image.tmdb.org/t/p/w500${posterPath}`;
  return (
    <div className="moviePosterContainer">
      <Link to={`/movies/${id}`} state={originalTitle}>
        <HoverOverlay originalTitle={originalTitle} releaseDate={releaseDate} />
      </Link>
      <img src={posterImage} />
    </div>
  );
};

MoviePoster.propTypes = {
  id: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};
