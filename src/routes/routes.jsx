import { Route } from 'react-router-dom';
import { MovieList } from '../components/MovieList';
import { MovieDetail } from '../components/MovieDetail';
import { ActorDetail } from '../components/ActorDetail';

const routes = (
  <>
    <Route path="/" element={<MovieList />} />
    <Route path="/movies/:id" element={<MovieDetail />}></Route>
    <Route path="/actors/:id" element={<ActorDetail />}></Route>
  </>
);

export default routes;
