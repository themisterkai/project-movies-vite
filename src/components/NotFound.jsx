import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { getPageTitle } from '../helpers';

export const NotFound = ({ notFoundType = 'page', setNotFound }) => {
  window.document.title = getPageTitle('Not Found');
  return (
    <div className="notFound">
      <h1>Kai&apos;s Movie Site</h1>
      <h2>Whoops! We can&apos;t seem to find that {notFoundType}</h2>
      <Link
        className="notFoundHome"
        to={`/`}
        onClick={() => setNotFound(false)}
        title="Back to Home"
      >
        <h3>Check out the latest movies intead</h3>
      </Link>
    </div>
  );
};

NotFound.propTypes = {
  notFoundType: PropTypes.string,
  setNotFound: PropTypes.func,
};
