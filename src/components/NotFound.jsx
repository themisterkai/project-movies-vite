import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const NotFound = ({ type }) => {
  window.document.title = "Kai's Movie Site | Not Found";
  return (
    <div className="notFound">
      <h1>Kai&apos;s Movie Site</h1>
      <h2>Whoops! We can&apos;t seem to find that {type}</h2>
      <Link className="notFoundHome" to={`/`}>
        <h3>Check out new movies intead</h3>
      </Link>
    </div>
  );
};

NotFound.propTypes = {
  type: PropTypes.string.isRequired,
};
