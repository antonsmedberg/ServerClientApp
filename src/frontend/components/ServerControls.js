import React, { useState, useContext, useEffect, useRef } from 'react';
import { ServerStatusContext } from './context/ServerStatusContext';
import Button from './Button';
import './ServerControls.css';

// Custom hook for debouncing
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const ServerControls = () => {
  const { status, onCommand } = useContext(ServerStatusContext);
  const [commandInput, setCommandInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const debouncedCommandInput = useDebounce(commandInput, 300);
  
  useEffect(() => {
    const updateSuggestions = (input) => {
      setSuggestions(input ? commandsList.filter(cmd => cmd.startsWith(input)) : []);
    };

    updateSuggestions(debouncedCommandInput);
  }, [debouncedCommandInput]);

  const commandsList = ['restart', 'shutdown', 'status', 'update'];

  const submitCommand = () => {
    onCommand(commandInput);
    setCommandInput('');
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setCommandInput(suggestion);
    // Optionally, focus the input after selection for better keyboard navigation
    inputRef.current.focus();
  };
  
  // Add a ref to the input element
  const inputRef = useRef(null);
  

  return (
    <div className="server-controls">
      <h3>Server Management</h3>
      <p>Server Status: {status}</p>
      <input 
        type="text" 
        value={commandInput} 
        onChange={(e) => setCommandInput(e.target.value)} 
        placeholder="Enter server command" 
      />
      <Button text="Send Command" onClick={submitCommand} />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <button key={index} onClick={() => setCommandInput(suggestion)} className="suggestion-item">
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServerControls;



