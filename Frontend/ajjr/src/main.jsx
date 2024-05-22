import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Navigation from "./components/navbar/navbar.jsx"; // Se till att stigen är korrekt
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import AboutUs from "./pages/aboutus/aboutus.jsx";
import Perfumes from "./pages/perfumes/perfumes.jsx";
import FAQ from "./pages/faq/faq.jsx";
import Login from "./pages/login/login.jsx";
import RegisterPage from "./pages/register/register.jsx";
import Home from "./pages/home/home.jsx";
import Checkout from "./pages/checkout/checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "aboutus", element: <AboutUs /> },
      {
        path: "produkter",
        element: <Perfumes />,
        children: [
          { path: "herr", element: <Perfumes /> },
          { path: "dam", element: <Perfumes /> },
          { path: "unisex", element: <Perfumes /> },
          { path: "musk", element: <Perfumes /> },
          { path: "oud", element: <Perfumes /> },
          { path: "testers", element: <Perfumes /> },
        ],
      },
      {
        path: "kontakt",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "loggain",
        element: <Login></Login>,
      },
      {
        path: "RegisterPage",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "kassa",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

// Skapa en React-root för appen
const appRoot = ReactDOM.createRoot(document.getElementById("root"));
appRoot.render(<RouterProvider router={router}></RouterProvider>);

/* // Skapa en separat React-root för navbaren
const navbarRoot = ReactDOM.createRoot(document.getElementById('navbar-root'));
navbarRoot.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
); */
