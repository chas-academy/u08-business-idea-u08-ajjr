import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import FAQ from "./pages/faq/faq";
import "./App.css";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutus/aboutus";
import { FaQq } from "react-icons/fa";
import Navigation from "./components/navbar/navbar";

const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <Home />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
