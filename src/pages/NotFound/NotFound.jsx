import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

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
  const [suggestedLinks, setSuggestedLinks] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const suggestions = await (Math.random() > 0.5
        ? ['/catalog', '/favorites']
        : ['/', '/about']);
      setSuggestedLinks(suggestions);
    };

    fetchSuggestions();
  }, []);

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
      {suggestedLinks.length > 0 && (
        <StyledBox>
          <Typography variant="h6" gutterBottom>
            Perhaps you were looking for:
          </Typography>
          <ul>
            {suggestedLinks.map(link => (
              <li key={link}>
                <Link to={link}>{link}</Link>
              </li>
            ))}
          </ul>
        </StyledBox>
      )}

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
    </StyledContainer>
  );
};

export default NotFoundPage;
