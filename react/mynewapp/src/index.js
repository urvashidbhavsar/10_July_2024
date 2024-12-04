import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Msg from './Msg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Msg />
    {/* <Msg></Msg> */}
    <App />
  </React.StrictMode>
);
