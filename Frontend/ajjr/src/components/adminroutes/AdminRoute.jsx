import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userRole = localStorage.getItem("userRole");

  console.log("AdminRoute isLoggedIn:", isLoggedIn); 
  console.log("AdminRoute userRole:", userRole); 

  if (!isLoggedIn || userRole !== "admin") {
    return <Navigate to="/loggain" />;
  }

  return children;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
