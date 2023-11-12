import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const CastDetail = ({ cast }) => (
  <>
    <h4>Top Cast</h4>
    {cast.slice(0, 3).map(cast => (
      <li key={cast.id}>
        <Link to={`/actors/${cast.id}`}>{cast.name}</Link>
      </li>
    ))}
  </>
);

CastDetail.propTypes = {
  cast: PropTypes.array.isRequired,
};
