import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/Styles/App/index.css';
import App from './App/App.js';
import reportWebVitals from './App/logic/reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
