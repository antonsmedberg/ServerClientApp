// client/src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { mockLogin } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (credentials) => {
    try {
      const response = await mockLogin(credentials);
      if (response.token) {
        setIsAuthenticated(true); // Update authentication state
      }
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false); // Simply update state for mock; clear tokens/storage in real app
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};
