// client/src/services/apiService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Ensure you have REACT_APP_API_URL in your .env file
const API_URL2 = '/api/server'; // Adjust based on your backend API structure

export const setupServer = async (port) => {
    return axios.post(`${API_URL2}/setup`, { port });
};


export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error("Could not fetch data", error);
    throw error;
  }
};



app.post('/api/server/start', (req, res) => {
  // Authentication and authorization checks
  // Logic to start the server
  res.json({ message: "Server started successfully." });
});

app.post('/api/server/stop', (req, res) => {
  // Authentication and authorization checks
  // Logic to stop the server
  res.json({ message: "Server stopped successfully." });
});

app.get('/api/server/status', (req, res) => {
  // Logic to check the server's status
  res.json({ status: "Running", uptime: "2 hours" });
});
