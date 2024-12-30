import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import App from './App.tsx';
import './styles/global.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using `createRoot`
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
