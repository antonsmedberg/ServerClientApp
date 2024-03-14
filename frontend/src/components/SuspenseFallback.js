import React from 'react';

const SuspenseFallback = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Loading, please wait...</h2>
      {/* You can add a spinner or animation here */}
    </div>
  );
};

export default SuspenseFallback;
