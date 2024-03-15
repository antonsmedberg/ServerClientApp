import React, { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData'; // Adjust based on actual path
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import './HomePage.css';
import ServerControls from '../components/ServerControls';
import ServerSetupForm from '../components/ServerSetupForm';
import Modal from '../components/Modal';
import { toast, ToastContainer } from 'react-toastify';

const HomePage = () => {
  const { data, error } = useFetchData("URL_TO_YOUR_DATA_SOURCE");
  const [isSetupFormOpen, setIsSetupFormOpen] = useState(false);
  const [serverStatus, setServerStatus] = useState('Checking...');
  const [serverOutput, setServerOutput] = useState([]);

  // React to the error state from useFetchData
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // Function to simulate server actions like start/stop
  const handleServerAction = async (action) => {
    // Displaying action in progress
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
        <ServerControls
          status={serverStatus}
          onCommand={handleServerAction}
          output={serverOutput}
        />
        <div className="app-content">
          <h2>Welcome to My Application</h2>
          <Button text="Setup New Server" onClick={() => setIsSetupFormOpen(true)} />
          <Modal isOpen={isSetupFormOpen} onClose={() => setIsSetupFormOpen(false)}>
            <ServerSetupForm />
          </Modal>
          <Button text="Click Me" onClick={() => toast.info('Button clicked!')} />
          {error ? (
            <p className="error-message">{error}</p>
          ) : (
            data && <p className="data-loaded">Data loaded: {JSON.stringify(data, null, 2)}</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

