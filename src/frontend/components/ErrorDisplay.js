// ErrorDisplay.js
import React from 'react';
import './ErrorDisplay.css'; // Assuming you create the CSS file

const ErrorDisplay = ({ message }) => {
  return (
    <div className="error-display">
      <p>An error occurred: {message}</p>
    </div>
  );
};

export default ErrorDisplay;



