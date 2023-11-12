import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const TopMovies = ({ movies }) => {
  return (
    <>
      <h4>Top Movies</h4>
      {movies
        .slice(0, 20)
        .sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
        .map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} title={movie.original_title}>
              {movie.original_title} (
              {movie.release_date !== ''
                ? `${movie.release_date.slice(0, 4)}`
                : 'unknown'}
              )
            </Link>
          </li>
        ))}
    </>
  );
};

TopMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
