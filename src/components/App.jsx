import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));

export const App = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      localStorage.setItem('from', location.state.from);
    }
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path=""
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="movies/:id"
            element={
              <Suspense>
                <MoviePage />
              </Suspense>
            }
          />
          <Route
            path="movies/:id/cast"
            element={
              <Suspense>
                <MoviePage />
              </Suspense>
            }
          />
          <Route
            path="movies/:id/reviews"
            element={
              <Suspense>
                <MoviePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
