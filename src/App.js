import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './frontend/context/AuthContext';
import ProtectedRoute from './frontend/components/ProtectedRoute';
import Layout from './frontend/components/Layout';
import SuspenseFallback from './frontend/components/SuspenseFallback';
import ErrorBoundary from './frontend/components/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import { theme } from './frontend/theme';
import styled from 'styled-components';

// Styled Components
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  // Add more styles as needed
`;

// Lazy Loaded Pages
const HomePage = lazy(() => import('./frontend/pages/HomePage'));
const LoginPage = lazy(() => import('./frontend/pages/LoginPage'));
const AboutPage = lazy(() => import('./frontend/pages/AboutPage'));
const NotFoundPage = lazy(() => import('./frontend/pages/NotFoundPage'));

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <Layout>
          <ErrorBoundary>
            <Suspense fallback={<SuspenseFallback />}>
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Protected Routes */}
                <Route path="/" element={<ProtectedRoute />}>
                  <Route index element={<HomePage />} />
                  {/* Add more protected routes if needed */}
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </Router>
    </AuthProvider>
  </ThemeProvider>
);

export default App;












