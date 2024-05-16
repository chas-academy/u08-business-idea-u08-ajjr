
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import Navbar from './/components/navbar/Navbar.jsx'; // Se till att stigen är korrekt
import './index.css'

// Skapa en React-root för appen
const appRoot = ReactDOM.createRoot(document.getElementById('root'));
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Skapa en separat React-root för navbaren
const navbarRoot = ReactDOM.createRoot(document.getElementById('navbar-root'));
navbarRoot.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
