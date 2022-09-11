import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/fetchFilms';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchCast(params.id).then(res => {
      console.log(res);
      setCast(res.cast);
    });
  }, [params.id]);

  return (
    <>
      <h1>Cast</h1>
      <CastList cast={cast} />
    </>
  );
};

export default Cast;
