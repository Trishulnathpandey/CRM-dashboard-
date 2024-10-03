import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing the CSS file for global styles
import App from './App'; // Importing the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
