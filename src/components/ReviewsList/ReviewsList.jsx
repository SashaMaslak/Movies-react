import PropTypes from 'prop-types';
import {
  ReviewsLIstBlock,
  TitleReviews,
  TextReviews,
} from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsLIstBlock>
      {reviews && reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <TitleReviews>Author: {review.author}</TitleReviews>
              <TextReviews>{review.content}</TextReviews>
            </li>
          ))}
        </ul>
      )}
      {reviews && reviews.length === 0 && (
        <p> We don't have any reviews for this movie</p>
      )}
    </ReviewsLIstBlock>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    }).isRequired
  ),
};
