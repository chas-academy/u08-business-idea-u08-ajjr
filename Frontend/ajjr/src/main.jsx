
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import Navigation from './components/navbar/navbar.jsx'; // Se till att stigen är korrekt
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter, Route, Link } from 'react-router-dom';
import AboutUs from './pages/aboutus/aboutus.jsx';
import Perfumes from './pages/perfumes/perfumes.jsx';
import FAQ from './pages/faq/faq.jsx';
import Login from './pages/login/login.jsx';
import RegisterPage from './pages/register/register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "produkter",
        element: <Perfumes></Perfumes>,
        children: [
          {
            path: "herr",
            element: <Perfumes></Perfumes>
          }
        ]
      },
      {
        path: "omajjr",
        element: <AboutUs></AboutUs>
      },
      {
        path: "kontakt",
        element: <AboutUs></AboutUs>
      },
      {
        path: "faq",
        element: <FAQ></FAQ>
      },
      {
        path: "loggain",
        element: <Login></Login>
      },
      {
        path: "RegisterPage",
        element: <RegisterPage></RegisterPage>
      }

    ]


  },


])

// Skapa en React-root för appen
const appRoot = ReactDOM.createRoot(document.getElementById('root'));
appRoot.render(
  <RouterProvider router={router}></RouterProvider>
);

/* // Skapa en separat React-root för navbaren
const navbarRoot = ReactDOM.createRoot(document.getElementById('navbar-root'));
navbarRoot.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
); */
