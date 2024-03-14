import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { fetchData } from '../services/apiService';
import './HomePage.css';
import ServerControls from '../components/ServerControls';
import ServerSetupForm from '../components/ServerSetupForm'; // Import the setup form
import Modal from '../components/Modal'; // Import the Modal component
import { toast } from 'react-toastify';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [serverStatus, setServerStatus] = useState('Checking...');
  const [serverOutput, setServerOutput] = useState([]);
  const [isSetupFormOpen, setIsSetupFormOpen] = useState(false); // State to control modal visibility

  // Consolidate useEffect hooks for initial data fetching and server status checking if possible
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

    // Removed the duplicate server status polling for demonstration
  }, []);

  const handleServerAction = async (action) => {
    // Consolidating server action handlers into a single function
    console.log(`${action} server...`);
    // This is where you'd ideally call an API to actually start/stop/restart the server
    // For now, simulate the action with setTimeout
    setTimeout(() => {
      const newStatus = action === 'stop' ? 'Offline' : 'Online';
      const actionResult = `Server ${action} successfully`;

      setServerStatus(newStatus);
      setServerOutput((prevOutput) => [...prevOutput, actionResult]);
    }, 1000);
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <ServerControls
          status={serverStatus}
          onStart={() => handleServerAction('start')}
          onStop={() => handleServerAction('stop')}
          onCommand={handleServerAction} // Assuming onCommand can accept 'start'/'stop' commands
          output={serverOutput}
        />
        <div className="app-content">
          <h2>Welcome to My Application</h2>
          <Button text="Setup New Server" onClick={() => setIsSetupFormOpen(true)} />
          <Modal isOpen={isSetupFormOpen} onClose={() => setIsSetupFormOpen(false)}>
            <ServerSetupForm />
            </Modal>
          {/* Existing content rendering */}
          <Button text="Click Me" onClick={() => alert('Button clicked!')} />
          {error ? (
            <p className="error-message">{error}</p>
          ) : (
            <p className="data-loaded">Data loaded: {JSON.stringify(data, null, 2)}</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
