import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/system';

const StyledCircularProgress = styled(CircularProgress)`
  color: #e15b64; // Red color
`;

const Loader = () => {
  return (
    <StyledCircularProgress size={100} thickness={5} aria-label="loading" />
  );
};

export default Loader;
