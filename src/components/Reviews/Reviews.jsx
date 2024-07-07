import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ReviewItem from '../ReviewItem/ReviewItem';
import {
  ReviewsWrapper,
  NoReviewsMessage,
  ShowMoreButton,
} from './Reviews.styled';

const Reviews = ({ reviews }) => {
  const [numReviewsToShow, setNumReviewsToShow] = useState(3);

  const handleShowMore = () => {
    setNumReviewsToShow(prev => prev + 3);
  };

  return (
    <ReviewsWrapper>
      {reviews && reviews.length > 0 ? (
        <>
          {reviews.slice(0, numReviewsToShow).map(review => (
            <ReviewItem key={nanoid()} review={review} />
          ))}
          {numReviewsToShow < reviews.length && (
            <ShowMoreButton onClick={handleShowMore}>
              Show More Reviews
            </ShowMoreButton>
          )}
        </>
      ) : (
        <NoReviewsMessage>No reviews available.</NoReviewsMessage>
      )}
    </ReviewsWrapper>
  );
};

export default Reviews;
