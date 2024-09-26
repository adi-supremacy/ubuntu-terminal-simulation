import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional, only if you have global styles in index.css
import './App.css';    // Import the custom terminal styles from App.css
import App from './App';  // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Render the App component inside the #root element
);
