
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import FAQ from "./pages/faq/Faq";
import "./App.css";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutus/Aboutus";
import { FaQq } from "react-icons/fa";
import Navigation from "./components/navbar/Navbar";

const App = () => {
  return (
    <>


      <Navigation></Navigation>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
