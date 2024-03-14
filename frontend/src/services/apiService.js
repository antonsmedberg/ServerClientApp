// client/src/services/apiService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Ensure you have REACT_APP_API_URL in your .env file

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error("Could not fetch data", error);
    throw error;
  }
};

