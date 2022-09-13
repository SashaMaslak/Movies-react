import { useState, useEffect, Suspense } from 'react';
import { fetchTrendingFilms } from 'services/fetchFilms';
import MoviesList from 'components/MoviesList/MoviesList';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMoviesTrending = () => {
      setIsLoading(true);
      fetchTrendingFilms(page)
        .then(res => {
          setMovies(prev => (page === 1 ? res : [...prev, ...res]));
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    };
    getMoviesTrending();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Suspense fallback={null}>
        {!!movies.length && <MoviesList movies={movies} />}
        {!!movies.length && !isLoading && (
          <Button handleLoadMore={handleLoadMore} />
        )}
      </Suspense>
    </>
  );
};

export default HomePage;
