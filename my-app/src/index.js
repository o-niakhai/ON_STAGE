import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
      <React.StrictMode> 
        <App />
      </React.StrictMode>
    </BrowserRouter>, 
  document.getElementById('root')
);

reportWebVitals();
