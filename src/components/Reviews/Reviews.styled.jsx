import styled from '@emotion/styled';

export const ReviewsWrapper = styled.div`
  margin-top: 44px;
  width: 430px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  list-style-type: none;
`;
export const NoReviewsMessage = styled.p`
  font-style: italic;
  color: gray;
  text-align: center;
`;

export const ShowMoreButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 10px auto;
  display: block;
`;
