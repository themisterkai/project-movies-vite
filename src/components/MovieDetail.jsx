import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getURL, getPageTitle } from '../helpers';
import { NotFound } from './NotFound';
import { Loading } from './Loading';
import { CastDetail } from './CastDetail';
import { Back } from './Back';

export const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [cast, setCast] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleFetchData = async () => {
    try {
      const response = await fetch(getURL('movieDetail', id));
      const data = await response.json();
      const castResponse = await fetch(getURL('movieCredits', id));
      const castData = await castResponse.json();
      if (response.status === 404 || castResponse.status === 404) {
        setLoading(false);
        setNotFound(true);
        return;
      }
      if (
        (response.status >= 400 && response.status < 600) ||
        (castResponse.status >= 400 && castResponse.status < 600)
      ) {
        throw new Error(
          JSON.stringify({
            code: response.status,
            message: data.message,
            errorDetail: data.errors.message.message,
          })
        );
      }
      setMovieDetail(data);
      setCast(castData.cast);
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
    window.document.title = getPageTitle(movieDetail.original_title);
  }, [movieDetail]);

  return (
    (loading && <Loading />) ||
    (!loading &&
      (notFound ? (
        <NotFound type="movie" />
      ) : (
        <div className="movieDetail">
          <Back />
          <div
            className="movieDetailBackground"
            style={{
              backgroundImage:
                'url(' +
                `https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}` +
                ')',
            }}
          >
            <div className="movieDetailSummary">
              {movieDetail.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                  alt={`Poster of ${movieDetail.original_title}`}
                />
              )}
              <div className="movieDetailDetails">
                <h2>
                  <span className="title">{movieDetail.original_title}</span>
                  <span className="rating">
                    {movieDetail.vote_average.toFixed(1)}
                  </span>
                </h2>
                <p>{movieDetail.overview}</p>
                <CastDetail cast={cast} />
              </div>
            </div>
          </div>
        </div>
      )))
  );
};

MovieDetail.propTypes = {};
