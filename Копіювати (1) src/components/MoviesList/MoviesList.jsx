import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovList, Item, ImgPoster, MovieTitle } from './MoviesList.styled';
import { theme } from 'theme';
import { Box } from 'components/Box';

const defaultPoster =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box as={theme.as.s} p={theme.space[5]}>
      <MovList>
        {movies.map(movie => {
          return (
            <Item key={movie.id}>
              <NavLink to={`/movie/${movie.id}`} state={{ from: location }}>
                <ImgPoster
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : defaultPoster
                  }
                  alt=""
                />
                <MovieTitle>{movie.original_title}</MovieTitle>
              </NavLink>
            </Item>
          );
        })}
      </MovList>
    </Box>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  ),
};
