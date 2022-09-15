import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchFilmsByQuery } from 'services/fetchFilms';
import { theme } from 'theme';
import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = searchParams.get('query');
    if (params?.trim()) {
      const getMovieQuery = () => {
        setIsLoading(true);
        fetchFilmsByQuery(params, page)
          .then(res => {
            setMovies(prev => (page === 1 ? res : [...prev, ...res]))
              .catch(error => console.log(error))
              .finally(() => setIsLoading(false));
          })
          .catch(error => console.log(error))
          .finally(() => setIsLoading(false));
      };
      getMovieQuery();
    }
  }, [searchParams, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
  };

  return (
    <Box as={theme.as.m} p={theme.space[4]}>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      <Suspense fallback={null}>
        <MoviesList movies={movies} />
        {!!movies.length && !isLoading && (
          <Button handleLoadMore={handleLoadMore} />
        )}
      </Suspense>
    </Box>
  );
};

export default MoviePage;
