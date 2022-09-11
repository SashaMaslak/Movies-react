import { NavLink, useLocation } from 'react-router-dom';

const defaultPoster =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to={`/movie/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultPoster
                }
                alt=""
                width="100"
                height="200"
              />
              <h3>{movie.original_title}</h3>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
