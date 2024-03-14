import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { fetchData } from '../services/apiService';
import './HomePage.css';
import ServerControls from '../components/ServerControls'; // Ensure the path is correct

const HomePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [serverStatus, setServerStatus] = useState('Offline');
  const [serverOutput, setServerOutput] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
    };

    loadData();
  }, []);


  const handleStartServer = async () => {
    console.log('Starting server...');
    setTimeout(() => setServerStatus('Online'), 1000); // Simulated async action
  };

  const handleStopServer = async () => {
    console.log('Stopping server...');
    setTimeout(() => setServerStatus('Offline'), 1000); // Simulated async action
  };

  const handleServerCommand = (command) => {
    console.log(`Executing command: ${command}`);
    setServerOutput([...serverOutput, `Command executed: ${command}`]);
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <ServerControls
          status={serverStatus}
          onStart={handleStartServer}
          onStop={handleStopServer}
          onCommand={handleServerCommand}
          output={serverOutput}
        />
        <div className="app-content">
          <h2>Welcome to My Application</h2>
          <Button text="Click Me" onClick={() => alert('Button clicked!')} />
          {data ? (
            <p className="data-loaded">Data loaded: {JSON.stringify(data)}</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;