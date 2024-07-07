import React from 'react';
import { Typography, Container, Alert, AlertTitle } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styled from 'styled-components';
import CookieBanner from './acceptation';
const HighlightedText = styled(Typography)({
  fontWeight: 'bold',
  color: '#e53935',
});

const PrivacyAndAgreement = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '20px' }}>
      <Alert severity="info" icon={<ErrorOutlineIcon />}>
        <AlertTitle>Disclaimer</AlertTitle>
        <Typography variant="body1">
          This is an educational website. Prices, booking form, and photos are
          not real. We do not collect or sell your data. Enjoy exploring web
          development!
          <br />
          <HighlightedText variant="body1">
            Located in the EU. EU terms and regulations apply.
          </HighlightedText>
        </Typography>
      </Alert>
      <div>
        <CookieBanner />
      </div>
    </Container>
  );
};

export default PrivacyAndAgreement;
