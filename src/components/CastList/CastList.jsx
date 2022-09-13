import PropTypes from 'prop-types';
import {
  CastLIstBlock,
  ImgProfile,
  TitleProfile,
  TextProfile,
} from './CastList.styled';

const defaultImgProfile =
  'https://as1.ftcdn.net/v2/jpg/00/64/67/80/1000_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg';

const CastList = ({ cast }) => {
  console.log(cast);
  return (
    <>
      {cast && cast.length > 0 && (
        <CastLIstBlock>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <ImgProfile
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : defaultImgProfile
                  }
                  alt=""
                  width="250"
                />
                <TitleProfile>{actor.name}</TitleProfile>
                <TextProfile>{actor.character}</TextProfile>
              </li>
            );
          })}
        </CastLIstBlock>
      )}
      {cast && cast.length === 0 && (
        <p> We don't have any cast for this movie</p>
      )}
    </>
  );
};

export default CastList;

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};
