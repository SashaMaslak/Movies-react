import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchFilms';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import { ReviewsBlock, ReviewsTitle } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReviews = () => {
      setIsLoading(true);
      fetchReviews(params.id)
        .then(res => {
          console.log(res.results);
          setReviews(res.results);
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    };
    getReviews();
  }, [params.id]);

  return (
    <ReviewsBlock>
      {isLoading && <Loader />}
      <ReviewsTitle>Reviews List</ReviewsTitle>
      <ReviewsList reviews={reviews} />
    </ReviewsBlock>
  );
};

export default Reviews;
