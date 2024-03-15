import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ServerManagement.css'; // Assuming you have CSS for styling

const ServerManagement = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  const [serverStatus, setServerStatus] = useState('Unknown');
  const [error, setError] = useState('');

  useEffect(() => {
    const serverEndpoint = isOnline ? 'https://yourdomain.com' : 'http://localhost:3001';
    // Directly using io() as recommended for connecting
    const socket = io(serverEndpoint, {
      auth: { token: "Your JWT token here" }, // Ensure token is managed securely
      reconnectionAttempts: 5,
    });

    // Handle socket events
    socket.on('connect_error', () => setError("Socket connection error."));
    socket.on('status', (data) => {
      setServerStatus(`Server status: ${data.status}, Time: ${data.timestamp}`);
    });

    // Online/offline event listeners
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup function
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      socket.off('connect_error');
      socket.off('status');
      socket.disconnect(); // Ensure socket is disconnected on cleanup
    };
  // Ensure the effect re-runs only if isOnline changes
  }, [isOnline]);

  // Function to handle server actions like start/stop
  const handleAction = async (action) => {
    console.log(`${action} server...`);
    // Placeholder for actual implementation
  };

  return (
    <div className="server-management">
      <h2>Server Management</h2>
      {error && <div className="error">{error}</div>}
      <p>{serverStatus}</p>
      <button onClick={() => handleAction('start')} disabled={actionInProgress}>Start Server</button>
      <button onClick={() => handleAction('stop')} disabled={actionInProgress}>Stop Server</button>

    </div>
  );
};

export default ServerManagement;