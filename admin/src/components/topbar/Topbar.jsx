import React from "react";
import "./topbar.css";
import {Link} from "react-router-dom";
import {MdModeNight, MdOutlineLightMode} from "react-icons/md";
import {ImMenu} from "react-icons/im";

export default function Topbar({
  theme,
  selectTheme,
  navbarModal,
  setNavBarModal,
}) {
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
/* 
 {theme === "black" ? (
              <MdOutlineLightMode
                size={25}
                onClick={() => selectTheme("white")}
                color={theme === "black" ? "white" : "black"}
              />
            ) : (
              <MdModeNight
                size={25}
                onClick={() => selectTheme("black")}
                color={theme === "black" ? "white" : "black"}
              />
            )}
*/
