import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Kai&apos;s Movie Site</h1>
      <h2>Whoops! We can&apos;t seem to find that movie</h2>
      <Link className="notFoundHome" to={`/`}>
        <h3>Check out other movies intead</h3>
      </Link>
    </div>
  );
};

NotFound.propTypes = {};
