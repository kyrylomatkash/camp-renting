import React from 'react';
import ReviewRating from '../ReviewRating/ReviewRating';
import { Box } from '@mui/material'; // Import Box component from Material-UI
import {
  ReviewStyled,
  NameBox,
  FirstLetter,
  NameRatingWrapper,
  Comment,
} from './ReviewItem.styled';

const ReviewItem = ({ review }) => {
  const { comment, reviewer_name, reviewer_rating } = review;

  const getFirstLetter = name => {
    return name.charAt(0).toUpperCase();
  };

  const firstLetter = getFirstLetter(reviewer_name);

  return (
    <ReviewStyled>
      <Box
        p={2}
        boxShadow={0.5}
        borderRadius={4}
        bgcolor="background.paper"
        border={1}
        borderColor="grey.300"
      >
        <NameBox>
          <FirstLetter>{firstLetter}</FirstLetter>
          <NameRatingWrapper>
            <h4>{reviewer_name}</h4>
            <ReviewRating rating={reviewer_rating} />
          </NameRatingWrapper>
        </NameBox>
        <Comment>{comment}</Comment>
      </Box>
    </ReviewStyled>
  );
};

export default ReviewItem;
