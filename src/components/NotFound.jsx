import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getPageTitle } from '../helpers';

export const NotFound = ({ type, setNotFound }) => {
  window.document.title = getPageTitle('Not Found');
  return (
    <div className="notFound">
      <h1>Kai&apos;s Movie Site</h1>
      <h2>Whoops! We can&apos;t seem to find that {type}</h2>
      <Link
        className="notFoundHome"
        to={`/`}
        onClick={() => setNotFound(false)}
      >
        <h3>Check out new movies intead</h3>
      </Link>
    </div>
  );
};

NotFound.propTypes = {
  type: PropTypes.string.isRequired,
  setNotFound: PropTypes.func,
};
