import { useEffect, useState } from 'react';

import { API_KEY } from './constants';
import { MovieList } from './components/MovieList';

export const App = () => {
  const [movies, setMovies] = useState([]);
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
    <div>
      <MovieList movies={movies} />
    </div>
  );
};
