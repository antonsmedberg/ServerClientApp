import React, { createContext, useState, useEffect } from 'react';
import { mockLogin } from '../services/authService';

const AuthContext = createContext({
  isAuthenticated: false, 
  authLoading: false, 
  error: null,
  login: () => {},
  logout: () => {}, 
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Optional: Check for existing authentication here 
  }, []); 

  const login = async (credentials) => {
    try {
      setAuthLoading(true);
      setError(null); // Clear previous errors
      const response = await mockLogin(credentials);
      if (response.token) {
       setIsAuthenticated(true);
      } else { 
       // Simulate invalid credentials error
       setError('Invalid username or password');  
      }
    } catch (error) {
      setError(error.message); // Handle network or server errors
    } finally {
      setAuthLoading(false); 
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Clear any tokens/local storage in a real implementation
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authLoading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; // You don't need to export AuthContext separately

