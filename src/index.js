import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/Home';
import { BrowserRouter, Router, Routes} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


