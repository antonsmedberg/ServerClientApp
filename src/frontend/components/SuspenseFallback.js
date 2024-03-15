import React from 'react';

const SuspenseFallback = () => {
  return (
    <div className="loader-container">
       <div style={{ textAlign: 'center', marginTop: '50px' }}></div>
      <h2>Loading, please wait...</h2> 
      <div className="loader"></div>
    </div>
  );
};

export default SuspenseFallback;

