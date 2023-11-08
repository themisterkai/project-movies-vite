import { Route } from 'react-router-dom';
import { MovieList } from '../components/MovieList';
import { MovieDetail } from '../components/MovieDetail';

const routes = (
  <>
    <Route path="/" element={<MovieList />} />
    <Route path="/movies/:id" element={<MovieDetail />}></Route>
  </>
);

export default routes;
