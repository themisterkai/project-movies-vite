import { Route } from 'react-router-dom';

import { ActorDetail } from '../components/ActorDetail';
import { MovieDetail } from '../components/MovieDetail';
import { MovieList } from '../components/MovieList';

const routes = (
  <>
    <Route path="/" element={<MovieList />} />
    <Route path="/:movieListType" element={<MovieList />} />
    <Route path="/movies/:id" element={<MovieDetail />}></Route>
    <Route path="/actors/:id" element={<ActorDetail />}></Route>
  </>
);

export default routes;
