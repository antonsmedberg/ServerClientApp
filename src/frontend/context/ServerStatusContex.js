import React, { createContext, useState, useContext } from 'react';

const ServerStatusContext = createContext();

export const useServerStatus = () => useContext(ServerStatusContext);

export const ServerStatusProvider = ({ children }) => {
    const [status, setStatus] = useState('idle');

    const onCommand = (command) => {
        console.log(`Executing command: ${command}`);
        // Implement command handling logic here
        // For demonstration, we'll just set the status to the command
        setStatus(command);
    };

    return (
        <ServerStatusContext.Provider value={{ status, onCommand }}>
            {children}
        </ServerStatusContext.Provider>
    );
};
