// client/src/components/Layout.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
    document.body.className = !darkMode ? 'dark-mode' : '';
  };

  return (
    <div className="layout">
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <Header />
      <main id="mainContent" className="main-content" role="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;



