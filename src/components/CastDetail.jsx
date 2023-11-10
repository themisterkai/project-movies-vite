import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { API_KEY } from '../constants';
import { NotFound } from './NotFound';
import { Loading } from './Loading';

export const CastDetail = ({ cast }) => {
  // return
  // return {};
  return cast.slice(0, 3).map(cast => (
    <li key={cast.id}>
      <Link to={`/actor/${cast.id}`}>{cast.name}</Link>
    </li>
  ));
};

CastDetail.propTypes = {
  cast: PropTypes.array.isRequired,
};
