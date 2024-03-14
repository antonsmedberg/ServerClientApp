// client/src/pages/LoginPage.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Additional lines in LoginPage.js for loading state
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Adjust handleSubmit to manage loading state
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    await login(credentials);
    navigate('/');
  } catch (error) {
    alert('Login failed');
    setIsLoading(false); // Stop loading on failure
  }
};

// Update the return statement to show loading feedback
{isLoading ? <p>Loading...</p> : <button type="submit">Login</button>}

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={credentials.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={credentials.password} onChange={handleChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;