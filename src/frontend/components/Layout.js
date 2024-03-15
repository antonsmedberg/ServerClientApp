import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    updateTheme(newMode);
  };

  const updateTheme = (isDarkMode) => {
    document.documentElement.className = isDarkMode ? 'dark-mode' : '';
  };

  return (
    <div className="layout">
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <Header />
      <main id="mainContent" className="main-content" role="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;





