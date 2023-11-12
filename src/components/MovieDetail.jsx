import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../constants';
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
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      const castResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      const castData = await castResponse.json();
      if (response.status === 404 || castResponse.status === 404) {
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
