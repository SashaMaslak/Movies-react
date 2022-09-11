import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchFilmsByQuery } from 'services/fetchFilms';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = searchParams.get('query');
    console.log(searchParams);
    if (params?.trim()) {
      fetchFilmsByQuery(params).then(res => {
        setMovies(res);
      });
    }
  }, [searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
  };

  return (
    <>
      <h1>Page MoviePage</h1>
      <Searchbar onSubmit={onSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviePage;
