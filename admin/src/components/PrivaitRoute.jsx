import React from "react";
import {Navigate} from "react-router-dom";


const PrivaitRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem("userIqraa"));

  if (user) {

    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivaitRoute;
