import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import RecordingsProvider from './context/RecordingsContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecordingsProvider>
        <App />
      </RecordingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
