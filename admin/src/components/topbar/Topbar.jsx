import React, {useEffect, useState} from "react";
import "./topbar.css";
import {Link} from "react-router-dom";
import {ImMenu} from "react-icons/im";
import jwt_decode from "jwt-decode";

export default function Topbar({theme, navbarModal, setNavBarModal}) {
  // const [showMenuIcon, setShowMenuIcon] = useState(false);
  // const user = JSON.parse(localStorage.getItem("userIqraa"));
  // useEffect(() => {
  //   if (user) {
  //     const decoded = jwt_decode(user.token);
  //     if (decoded.admin) {
  //       setShowMenuIcon(true);
  //     } else {
  //       setShowMenuIcon(false);
  //     }
  //   } else {
  //     setShowMenuIcon(false);
  //   }
  // }, [user]);

  return (
    <div className="topbar shadow-lg">
      <div
        className={
          theme === "black"
            ? "topbarWrapper bg-zinc-800 text-white"
            : "topbarWrapper"
        }
      >
        <Link to="/admin" className="topLeft">
          <span className={theme === "black" ? "logo text-white" : "logo"}>
            IQRA
          </span>
        </Link>

        <div className="topRight">
          <div className="topbarIconContainer"></div>
          <ImMenu
            size={25}
            onClick={() => setNavBarModal(!navbarModal)}
            className="cursor-pointer text-black"
          />
        </div>
      </div>
    </div>
  );
}
