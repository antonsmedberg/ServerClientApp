// src/frontend/hooks/useFetchData.js
import { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(''); // Reset error state in case of successful fetch
      } catch (err) {
        setError('Error fetching data');
        console.error('Fetching error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
