import React, { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import ServerControls from '../components/ServerControls';
import ServerSetupForm from '../components/ServerSetupForm';
import Modal from '../components/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorDisplay from '../components/ErrorDisplay'; // Import ErrorDisplay
import './HomePage.css';

const HomePage = () => {
  const { data, error, isLoading } = useFetchData("URL_TO_YOUR_DATA_SOURCE");
  const [isSetupFormOpen, setIsSetupFormOpen] = useState(false);
  const [serverStatus, setServerStatus] = useState('Checking...');
  const [serverOutput, setServerOutput] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error('Error loading data');
    }
  }, [error]);

  const handleServerAction = async (action) => {
    toast.info(`${action} server...`);
    setTimeout(() => {
      const newStatus = action === 'stop' ? 'Offline' : 'Online';
      const actionResult = `Server ${action} successfully`;
      setServerStatus(newStatus);
      setServerOutput(prevOutput => [...prevOutput, actionResult]);
      toast.success(actionResult);
    }, 1000);
  };

  return (
    <div className="home-page">
      <ToastContainer />
      <Header />
      <main className="main-content">
        <ServerControls status={serverStatus} onCommand={handleServerAction} output={serverOutput} />
        <div className="app-content">
          <h2>Welcome to My Application</h2>
          <Button text="Setup New Server" onClick={() => setIsSetupFormOpen(true)} />
          <Modal isOpen={isSetupFormOpen} onClose={() => setIsSetupFormOpen(false)}>
            <ServerSetupForm />
          </Modal>
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : error ? (
            <ErrorDisplay message={error.message} /> // Use ErrorDisplay here
          ) : (
            <div className="data-loaded">Data loaded: {JSON.stringify(data, null, 2)}</div>
          )}
          <Button text="Click Me" onClick={() => toast.info('Button clicked!')} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;




