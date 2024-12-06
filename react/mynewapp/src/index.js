import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Msg1 from './Msg';
// import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Msg1 />
    {/* <Msg></Msg> */}
  </React.StrictMode>
);
