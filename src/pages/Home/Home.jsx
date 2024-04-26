import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/system';

// Styled Box component with animation
const AnimatedBox = styled(Box)({
  '@keyframes moveRightLeft': {
    '0%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(20px)' },
    '100%': { transform: 'translateX(0)' },
  },
  animation: '$moveRightLeft 3s infinite',
});

// Styled Card component with hover effect and box shadow
const StyledCard = styled(Card)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
});

const Home = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <AnimatedBox sx={{ marginBottom: '30px', textAlign: 'center' }}>
        <Typography variant="h4">Welcome to Campers Rental Services</Typography>
        <Typography variant="body1">
          Explore the world with comfort and convenience. Rent your dream camper
          for your next adventure.
        </Typography>
      </AnimatedBox>

      <Fade in={true} timeout={1000}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">Special Offers</Typography>
                <Typography variant="body2">
                  Discover exclusive discounts and deals on camper rentals.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">Location Filters</Typography>
                <Typography variant="body2">
                  Easily find campers available in your preferred location.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">Equipment Options</Typography>
                <Typography variant="body2">
                  Filter campers based on specific equipment requirements.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">Types of Campers</Typography>
                <Typography variant="body2">
                  Browse through various camper types to find the perfect match
                  for your adventure.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">24/7 Customer Support</Typography>
                <Typography variant="body2">
                  Get assistance anytime during your camper rental journey.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Fade>

      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Campers Rental Services. All Rights
          Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
