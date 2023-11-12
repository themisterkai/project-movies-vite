import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const TopMovies = ({ movies }) => {
  return (
    <>
      <h4>Top Movies</h4>
      {movies.slice(0, 10).map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.original_title} ({movie.release_date.slice(0, 4)})
          </Link>
        </li>
      ))}
    </>
  );
};

TopMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
