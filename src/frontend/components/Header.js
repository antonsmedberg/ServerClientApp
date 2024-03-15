// client/src/components/Header.js
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css'; // Updated styles

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Close nav on escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isNavExpanded) {
        setIsNavExpanded(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isNavExpanded]);

  return (
    <header className="header">
      <h1>My Application</h1>
      <button className="nav-toggle" aria-label="toggle navigation" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <span className="hamburger"></span>
      </button>
      <nav className={`nav ${isNavExpanded ? "nav-expanded" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {isAuthenticated && <button onClick={logout} className="logout-btn">Logout</button>}
      </nav>
      {isNavExpanded && <div className="overlay" onClick={() => setIsNavExpanded(false)}></div>}
    </header>
  );
};

export default Header;


