import { useState, useEffect } from 'react';
import {
  useLocation,
  useParams,
  useNavigate,
  Link,
  Outlet,
} from 'react-router-dom';
import { fetchFilmsById } from 'services/fetchFilms';

const defaultPoster =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFilmsById(params.id).then(res => {
      setMovie(res);
    });
  }, [params.id]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <>
      <h1>Page MovieDetails</h1>
      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
      {movie && (
        <div>
          <h3>{movie.original_title}</h3>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultPoster
            }
            alt=""
            width="500"
            haight="750"
          />
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
