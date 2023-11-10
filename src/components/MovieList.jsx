// import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

import { MoviePoster } from './MoviePoster';
import { API_KEY } from '../constants';
import { Loading } from './Loading';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      if (response.status >= 400 && response.status < 600) {
        throw new Error(
          JSON.stringify({
            code: response.status,
            message: data.message,
            errorDetail: data.errors.message.message,
          })
        );
      }
      setMovies(data.results);
      setLoading(false);
      console.log(data.results);
    } catch (e) {
      // we can log the error in case it will be useful for users when reporting bugs to us
      console.error(e);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    (loading && <Loading />) ||
    (!loading && (
      <div className="movieWrapper">
        {movies.map(movie => (
          <div key={movie.id} className="movies">
            <MoviePoster {...movie} />
          </div>
        ))}
      </div>
    ))
  );
};

MovieList.propTypes = {
  // movies: PropTypes.array.isRequired,
};
