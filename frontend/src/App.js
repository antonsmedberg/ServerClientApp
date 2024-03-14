// client/src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import SuspenseFallback from './components/SuspenseFallback';
import ErrorBoundary from './components/ErrorBoundary';
import { theme } from './theme'; // Import the theme

// Lazy load components
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const App = () => (
  <ThemeProvider theme={theme}> {/* Wrap everything in ThemeProvider */}
    <AuthProvider>
      <Router>
        <Suspense fallback={<SuspenseFallback />}>
          <Layout> {/* Common layout structure */}
            <ErrorBoundary>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
              </Routes>
            </ErrorBoundary>
          </Layout>
        </Suspense>
      </Router>
    </AuthProvider>
  </ThemeProvider>
);

export default App;

