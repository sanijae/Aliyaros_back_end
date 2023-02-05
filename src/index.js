import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/aliyaros_back_end'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//HashRouter
// basename={'/aliyaros_back_end/'}
//basename={process.env.PUBLIC_URL}