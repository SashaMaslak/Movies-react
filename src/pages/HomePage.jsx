import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from 'services/fetchFilms';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingFilms().then(res => {
      setMovies(res);
    });
  }, []);

  return <MoviesList movies={movies} />;
};

export default HomePage;
