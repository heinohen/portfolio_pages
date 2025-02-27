// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18 and above (Root API)
import './styles.css';  // Global styles (optional, can be omitted if not used)
import App from './App';  // Import your main App component

// Get the root DOM element (where your app will be rendered)
const rootElement = document.getElementById('root') as HTMLElement;

// Create a root React DOM instance and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
