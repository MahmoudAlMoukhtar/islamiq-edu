import React from "react";
import {Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivaitRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem("userIqraa"));
  const decoded = jwt_decode(user.token);
  if (!user && !decoded.admin) {
    return <Redirect to="/admin/auth" replace />;
  }

  return children;
};

export default PrivaitRoute;
