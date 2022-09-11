import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviePage from 'pages/MoviePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Navigation from './Navigation/Navigation';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
        </Route>
      </Routes>
    </>
  );
};
