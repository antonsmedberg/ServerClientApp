import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './frontend/context/AuthContext';
import ProtectedRoute from './frontend/components/ProtectedRoute';
import Layout from './frontend/components/Layout';
import SuspenseFallback from './frontend/components/SuspenseFallback';
import ErrorBoundary from './frontend/components/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import { theme } from './frontend/theme'; // Ensure dynamic theme switching if needed
import styled from 'styled-components';



const ResponsiveDiv = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  // Add more styles
`;

// Define routes using lazy loading for optimal performance
const HomePage = lazy(() => import('./frontend/pages/HomePage'));
const LoginPage = lazy(() => import('./frontend/pages/LoginPage'));
const AboutPage = lazy(() => import('./frontend/pages/AboutPage'));
// Add more routes as your application grows

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <Suspense fallback={<SuspenseFallback />}>
          <Layout>
            <ErrorBoundary>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
                {/* Consider adding a route for a NotFoundPage */}
              </Routes>
            </ErrorBoundary>
          </Layout>
        </Suspense>
      </Router>
    </AuthProvider>
  </ThemeProvider>
);

export default App;


