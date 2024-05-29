import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import FAQ from "./pages/faq/faq";
import "./App.css";
import "./index.css";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutus/aboutus";
import { FaQq } from "react-icons/fa";
import Navigation from "./components/navbar/navbar";

const App = () => {


  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });


  };
  return (
    <>
      <Navigation></Navigation>
      <Outlet context={{ cartItems, setCartItems, addToCart }} />
      <Footer></Footer>
    </>
  );
};

export default App;
