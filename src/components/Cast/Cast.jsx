import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'components/Box';
import { fetchCast } from 'services/fetchFilms';
import CastList from 'components/CastList/CastList';
import { CastTitle } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCast = () => {
      setIsLoading(true);
      fetchCast(params.id)
        .then(res => {
          setCast(res.cast);
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    };
    getCast();
  }, [params.id]);

  return (
    <Box as="section" padding="10px" textAlign="center">
      {isLoading && <Loader />}
      <CastTitle>Cast List</CastTitle>
      <CastList cast={cast} />
    </Box>
  );
};

export default Cast;
