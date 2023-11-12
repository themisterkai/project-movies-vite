import { PropTypes } from 'prop-types';

import { Loading } from './Loading';
import { NotFound } from './NotFound';

export const LoadingOrNotFound = ({ loading, notFound, notFoundType }) => {
  if (loading) {
    return <Loading />;
  }
  if (notFound) {
    return <NotFound notFoundType={notFoundType} />;
  }
  return <></>;
};

LoadingOrNotFound.propTypes = {
  loading: PropTypes.bool.isRequired,
  notFound: PropTypes.bool.isRequired,
  notFoundType: PropTypes.string.isRequired,
};
