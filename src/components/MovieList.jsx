import { PropTypes } from 'prop-types';

import { MoviePoster } from './MoviePoster';

export const MovieList = ({ movies }) => {
  return (
    <div className="movieWrapper">
      {movies.map(movie => (
        <div key={movie.id} className="movies">
          <MoviePoster {...movie} />
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
