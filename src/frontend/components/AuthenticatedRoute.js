import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './frontend/context/AuthContext';

const AuthenticatedRoute = ({ children, redirectPath = '/login', ...rest }) => {
  const { isAuthenticated, authLoading } = useContext(AuthContext);

  if (authLoading) {
    // Consider a loading indicator here if needed
    return <div>Checking authentication...</div>;
  }

  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Navigate to={redirectPath} replace />
  );
};

export default AuthenticatedRoute;

