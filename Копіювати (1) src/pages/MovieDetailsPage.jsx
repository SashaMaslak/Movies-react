import { useState, useEffect, Suspense } from 'react';
import { theme } from 'theme';
import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';
import styled from 'styled-components';
import {
  useLocation,
  useParams,
  useNavigate,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { fetchFilmsById } from 'services/fetchFilms';

import {
  MovieDetailsBlock,
  MovieDetailsBtn,
  MovieTitle,
  MovieImg,
  MovieDescribe,
  MovieInfo,
  MovieText,
  MovieTitleText,
  GenresList,
  AddInfoTitle,
  MovieInfoItem,
} from './MovieDetailsPage.styled';

const StyledLink = styled(NavLink)`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 32px;
  }
  &:hover {
    color: #ff00ff;
  }
  &.active {
    border-bottom: 3px solid #ff00ff;
    border-radius: 3px;
  }
`;

const defaultPoster =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getFilmById = () => {
      setIsLoading(true);
      fetchFilmsById(params.id)
        .then(res => {
          setMovie(res);
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    };
    getFilmById();
  }, [params.id]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <Box p={theme.space[4]}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Suspense fallback={null}>
            <MovieDetailsBtn type="button" onClick={handleGoBack}>
              Go Back
            </MovieDetailsBtn>
            {movie && (
              <MovieDetailsBlock>
                <MovieImg
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : defaultPoster
                  }
                  alt=""
                />
                <MovieDescribe>
                  <MovieTitle>
                    {movie.original_title} ({movie.release_date.substr(0, 4)})
                  </MovieTitle>
                  <MovieText>
                    {' '}
                    <span>User score:</span> {movie.vote_average}
                  </MovieText>
                  <MovieTitleText>Overview:</MovieTitleText>
                  <MovieText>{movie.overview}</MovieText>
                  <MovieTitleText>Genres:</MovieTitleText>
                  <GenresList>
                    {movie.genres &&
                      movie.genres.map(genre => {
                        return <li key={genre.id}>{genre.name}</li>;
                      })}
                  </GenresList>
                </MovieDescribe>
              </MovieDetailsBlock>
            )}
            <AddInfoTitle>Additional information</AddInfoTitle>
            <MovieInfo>
              <MovieInfoItem>
                <StyledLink to="cast" state={{ from: location.state.from }}>
                  Cast
                </StyledLink>
              </MovieInfoItem>
              <MovieInfoItem>
                <StyledLink to="reviews" state={{ from: location.state.from }}>
                  Reviews
                </StyledLink>
              </MovieInfoItem>
              <Outlet />
            </MovieInfo>
          </Suspense>
        </>
      )}
    </Box>
  );
};

export default MovieDetailsPage;
