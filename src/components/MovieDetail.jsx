// import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../constants';

export const MovieDetail = () => {
  const { id } = useParams();
  // console.log('************', useParam   s());
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
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
      setMovieDetail(data);
      setLoading(false);
      console.log(data);
    } catch (e) {
      // we can log the error in case it will be useful for users when reporting bugs to us
      console.error(e);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    !loading && (
      <div
        className="movieDetail"
        style={{
          backgroundImage:
            'url(' +
            `https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}` +
            ')',
        }}
      >
        <h1>{movieDetail.original_title}</h1>
        {/* <HoverOverlay originalTitle={originalTitle} releaseDate={releaseDate} /> */}
        {/* <img src={posterImage} /> */}
      </div>
    )
  );
};

MovieDetail.propTypes = {
  //   // id: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  //   poster_path: PropTypes.string.isRequired,
  //   release_date: PropTypes.string.isRequired,
};
