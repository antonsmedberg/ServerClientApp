import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import SuspenseFallback from './components/SuspenseFallback';
import ErrorBoundary from './components/ErrorBoundary';
import { theme } from './theme'; // Ensure dynamic theme switching if needed
// Consider importing a NotFoundPage for unmatched routes

// Define routes using lazy loading for optimal performance
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
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


