import React, { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useNavigate } from 'react-router-dom';

const AcceptationBanner = () => {
  const navigate = useNavigate();
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('userConsent');
    if (consent === 'true') {
      setHasConsented(true);
    }
  }, []);

  const handleAccept = () => {
    setHasConsented(true);
    localStorage.setItem('userConsent', 'true');
  };

  const handleDecline = () => {
    localStorage.setItem('userConsent', 'false');
    navigate('https://www.google.com');
  };

  return (
    !hasConsented && (
      <CookieConsent
        location="none"
        buttonText="I Accept"
        cookieName="userConsent"
        style={{
          background: '#2B373B',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
        }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
        enableDeclineButton
        declineButtonText="I Decline"
        onAccept={handleAccept}
        onDecline={handleDecline}
      >
        This website created only for educational purposes.
      </CookieConsent>
    )
  );
};

export default AcceptationBanner;
