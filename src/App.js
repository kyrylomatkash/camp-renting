import React, { lazy, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFound/NotFound';
import AcceptationBanner from './components/policyandagreement/acceptation.jsx';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const Game = lazy(() => import('./components/Game/Game'));
const Terms = lazy(() =>
  import('./components/policyandagreement/policyandagreement')
);

const App = () => {
  const [hasConsented, setHasConsented] = useState(
    localStorage.getItem('userConsent') === 'true'
  );

  const ProtectedRoute = ({ children, redirectTo }) => {
    if (!hasConsented) {
      return <Navigate to={redirectTo} />;
    }
    return children;
  };

  return (
    <div>
      <AcceptationBanner onAccept={() => setHasConsented(true)} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute redirectTo="/terms">
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <ProtectedRoute redirectTo="/terms">
                <Catalog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute redirectTo="/terms">
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route
            path="/game"
            element={
              <ProtectedRoute redirectTo="/terms">
                <Game />
              </ProtectedRoute>
            }
          />
          <Route path="/terms" element={<Terms />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
