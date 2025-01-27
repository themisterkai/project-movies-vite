import { Link } from 'react-router-dom';

export const Back = () => {
  return (
    <Link className="back" to={`/`} title="Back">
      <span className="material-symbols-outlined">arrow_back_ios_new</span>
      Home
    </Link>
  );
};

Back.propTypes = {};
