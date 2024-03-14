import React, { useState } from 'react';
import { setupServer } from '../services/serverService';
import './ServerSetupForm.css'; // Ensure you create this CSS file

const ServerSetupForm = () => {
    const [port, setPort] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!port) {
            setError('Port is required');
            return;
        }

        try {
            await setupServer(port);
            alert('Server setup initiated');
            setPort('');
        } catch (error) {
            setError('Failed to setup server. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="server-setup-form">
            <div className="form-group">
                <label htmlFor="port">Port:</label>
                <input
                    id="port"
                    type="number"
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    placeholder="Enter server port"
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn" disabled={!port}>Setup Server</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default ServerSetupForm;

