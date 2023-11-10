import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';

import { API_KEY } from '../constants';
import { NotFound } from './NotFound';
import { Loading } from './Loading';

export const ActorDetail = () => {
  const { id } = useParams();
  const [actorDetail, setActorDetail] = useState({});
  const [movies, setMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();

      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
      );
      const castData = await movieResponse.json();
      if (response.status === 404 || movieResponse.status === 404) {
        setLoading(false);
        setNotFound(true);
        return;
      }
      if (response.status >= 400 && response.status < 600) {
        throw new Error(
          JSON.stringify({
            code: response.status,
            message: data.message,
            errorDetail: data.errors.message.message,
          })
        );
      }
      setActorDetail(data);
      setMovies(castData.cast.slice(0, 10));
      setLoading(false);
      console.log(data);
      console.log(castData);
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
    (!loading &&
      (notFound ? (
        <NotFound />
      ) : (
        <div className="actorDetail">
          <Link className="back" to={`/`}>
            <span className="material-symbols-outlined">
              arrow_back_ios_new
            </span>
            Home
          </Link>
          {/* <div
          className="actorDetailBackground"
          style={{
            backgroundImage:
              'url(' +
              `https://image.tmdb.org/t/p/w1280${actorDetail.backdrop_path}` +
              ')',
          }}
        > */}
          <div className="actorDetailSummary">
            <img
              src={`https://image.tmdb.org/t/p/w500${actorDetail.profile_path}`}
            />
            <div className="actorDetailDetails">
              <h2>
                <span className="actorName">{actorDetail.name}</span>
                {/* <span className="rating">
                  {actorDetail.vote_average.toFixed(1)}
                </span> */}
              </h2>
              {actorDetail.birthday && (
                <p>Born: {moment(actorDetail.birthday).format('LL')}</p>
              )}
              {actorDetail.deathday && (
                <p>Died: {moment(actorDetail.deathday).format('LL')}</p>
              )}
              {/* <p>
                <a
                  href={`https://www.imdb.com/name/${actorDetail.imdb_id}`}
                  target={`_blank`}
                >
                  IMDB Profile
                </a>
              </p> */}
              <h4>Top Movies</h4>
              {movies.map(movie => (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    {movie.original_title} ({movie.release_date.slice(0, 4)})
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
        // </div>
      )))
  );
};

ActorDetail.propTypes = {};
