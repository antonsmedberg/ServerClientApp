import React, { useState } from 'react';
import Button from '../components/Button';

const ServerControls = ({ status, onStart, onStop, onCommand, output }) => {
  const [commandInput, setCommandInput] = useState('');

  const handleCommandInput = (event) => {
    setCommandInput(event.target.value);
  };

  const submitCommand = () => {
    onCommand(commandInput);
    setCommandInput(''); // Clear input after submission
  };

  return (
    <div className="server-controls">
      <h3>Server Management</h3>
      <p>Server Status: {status}</p>
      <Button text="Start Server" onClick={onStart} />
      <Button text="Stop Server" onClick={onStop} />
      <div>
        <input
          type="text"
          value={commandInput}
          onChange={handleCommandInput}
          placeholder="Enter server command"
        />
        <Button text="Send Command" onClick={submitCommand} />
      </div>
      <div className="server-output">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default ServerControls;

