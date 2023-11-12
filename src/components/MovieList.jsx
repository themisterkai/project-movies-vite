// import { PropTypes } from 'prop-movieListTypes';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { MoviePoster } from './MoviePoster';
import { API_KEY, pageTitle } from '../constants';
import { Loading } from './Loading';

export const MovieList = () => {
  const { movieListType = 'popular' } = useParams();
  console.log('movieListType', movieListType);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieListType}?api_key=${API_KEY}&language=en-US&page=1`
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
    window.document.title =
      pageTitle + ' | ' + movieListType.replace('_', '-') + ' Movies';
  }, [movieListType]);

  return (
    (loading && <Loading />) ||
    (!loading && (
      <div className="movieWrapper">
        <div className="topnav">
          <Link
            className={movieListType === 'popular' ? 'topnav-active' : ''}
            to={'/'}
          >
            Popular
          </Link>
          <Link
            className={movieListType === 'top_rated' ? 'topnav-active' : ''}
            to={'/top_rated'}
          >
            Top-Rated
          </Link>
          <Link
            className={movieListType === 'upcoming' ? 'topnav-active' : ''}
            to={'/upcoming'}
          >
            Upcoming
          </Link>
          <span className="pageTitle">
            <h3>Kai&apos;s Movie Site</h3>
          </span>
        </div>
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
