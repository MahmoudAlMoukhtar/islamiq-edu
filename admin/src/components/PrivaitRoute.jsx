import React from "react";
import {Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivaitRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem("userIqraa"));
  if (user) {
    const decoded = jwt_decode(user.token);
    console.log(decoded);
    if (!decoded.admin) {
      return <Redirect to="/admin/auth" replace />;
    }
  } else if (!user) {
    return <Redirect to="/admin/auth" replace />;
  }

  return children;
};

export default PrivaitRoute;
