import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Game from 'components/Game/Game';

const StyledContainer = styled(Container)({
  paddingTop: '64px',
  paddingBottom: '64px',
});

const StyledBox = styled(Box)({
  textAlign: 'center',
  marginBottom: '32px',
});

const StyledTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '2.5rem',
  marginBottom: '16px',
  color: '#333',
});

const StyledDescription = styled(Typography)({
  fontSize: '1.1rem',
  marginBottom: '24px',
  color: '#666',
});

const StyledButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledButton = styled(Button)({
  marginRight: '16px',
  borderRadius: '30px',
  padding: '12px 24px',
});

const NotFoundPage = () => {
  return (
    <StyledContainer maxWidth="md">
      <StyledBox>
        <StyledTitle variant="h4" gutterBottom>
          Oops! Page not found.
        </StyledTitle>
        <StyledDescription variant="body1" gutterBottom>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </StyledDescription>
      </StyledBox>
      <StyledButtonContainer>
        <StyledButton
          component={Link}
          to="/catalog"
          variant="contained"
          color="primary"
        >
          Explore Campers
        </StyledButton>
        <StyledButton
          component={Link}
          to="/"
          variant="contained"
          color="primary"
        >
          Go to Home
        </StyledButton>
      </StyledButtonContainer>
      <Game />
    </StyledContainer>
  );
};

export default NotFoundPage;
