import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 
import './LoginPage.css'; // Add your CSS

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();



  const handleChange = (e) => {
    setErrorMessage(null); // Clear error on input change
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data) => { 
    setIsLoading(true);


    try {
      await login(data); // Send the form data 
      navigate('/');
    } catch (error) {
      if (error.response) {
        // Specific errors based on API responses
        if (error.response.status === 401) {
          setErrorMessage('Invalid username or password');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      } else {
        // Catch network errors or other unexpected failures 
        setErrorMessage('A network error occurred. Please check your connection.'); 
      } 

      setIsLoading(false); 
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form" aria-labelledby="login-heading"> 
      <h2 id="login-heading">Login</h2>

      <div className="form-group">
        <label htmlFor="username">
          Username:
        </label>
        <input 
          type="text" 
          id="username"
          {...register("username", { 
            required: 'Username is required', 
            minLength: { value: 3, message: 'Username must be at least 3 characters' }
          })} 
        />
        {errors.username && <p className="error-message" role="alert">{errors.username.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">
          Password:
        </label>
        <input 
          type="password" 
          id="password" 
          {...register("password", { 
            required: 'Password is required', 
            minLength: { value: 6, message: 'Password must be at least 6 characters'} 
          })}
        />
        {errors.password && <p className="error-message" role="alert">{errors.password.message}</p>}
      </div>

      {errorMessage && <p className="error-message" role="alert">{errorMessage}</p>} 

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );

};

export default LoginPage;