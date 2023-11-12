import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { getURL, getPageTitle } from '../helpers';
import { NotFound } from './NotFound';
import { Loading } from './Loading';
import { Back } from './Back';
import { TopMovies } from './TopMovies';

export const ActorDetail = () => {
  const { id } = useParams();
  const [actorDetail, setActorDetail] = useState({});
  const [movies, setMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleFetchData = async () => {
    try {
      const response = await fetch(getURL('actorDetail', id));
      const data = await response.json();

      const movieResponse = await fetch(getURL('actorCredits', id));
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
      setMovies(castData.cast);
      setLoading(false);
    } catch (e) {
      // we can log the error in case it will be useful for users when reporting bugs to us
      console.error(e);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    window.document.title = getPageTitle(actorDetail.name);
  }, [actorDetail]);

  return (
    (loading && <Loading />) ||
    (!loading &&
      (notFound ? (
        <NotFound type="actor" />
      ) : (
        <div className="actorDetail">
          <Back />
          <div className="actorDetailSummary">
            {actorDetail.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${actorDetail.profile_path}`}
              />
            )}
            <div className="actorDetailDetails">
              <h2>
                <span className="actorName">{actorDetail.name}</span>
              </h2>
              {actorDetail.birthday && (
                <p>Born: {moment(actorDetail.birthday).format('LL')}</p>
              )}
              {actorDetail.deathday && (
                <p>Died: {moment(actorDetail.deathday).format('LL')}</p>
              )}
              {actorDetail.imdb_id && (
                <p>
                  <a
                    href={`https://www.imdb.com/name/${actorDetail.imdb_id}`}
                    target={`_blank`}
                  >
                    IMDB Profile (External Link)
                  </a>
                </p>
              )}
              <TopMovies movies={movies} />
            </div>
          </div>
        </div>
        // </div>
      )))
  );
};

ActorDetail.propTypes = {};
