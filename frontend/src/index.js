import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Global.css'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered:', registration);
    }).catch(registrationError => {
      console.log('SW registration failed:', registrationError);
    });
  });
}


