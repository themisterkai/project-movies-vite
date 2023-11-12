import { getPageTitle } from '../helpers';

export const Loading = () => {
  window.document.title = getPageTitle('Loading');
  return (
    <div className="loading">
      <h1>Kai&apos;s Movie Site</h1>
      <h2>We&apos;re loading the best movies for you!</h2>
    </div>
  );
};

Loading.propTypes = {};
