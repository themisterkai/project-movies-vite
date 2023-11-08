import { PropTypes } from 'prop-types';

export const HoverOverlay = ({ originalTitle, releaseDate }) => {
  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="overlayTitle">
          <h1>{originalTitle}</h1>
        </div>
        <div className="overlayReleaseDate">Released {releaseDate}</div>
      </div>
    </div>
  );
};

HoverOverlay.propTypes = {
  originalTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
