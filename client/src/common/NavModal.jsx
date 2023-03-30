import React from "react";
import {Link, NavLink} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";

const activeStyle = {
  color: "white",
  backgroundColor: "#3cc4ad",
  padding: "20px 12px",
  borderLeft: "8px solid #fd5308",
};
const styles = {
  linkPages:
    "text-[#000] hover:text-white hover:text-white hover:bg-[#3cc4ad] py-6 px-2 w-full hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({setNavBarModal, navbarModal}) => {
  return (
    <div
      id="modal-nav"
      className={navbarModal ? styles.navBarModal : styles.navBarModalHidden}
    >
      <div
        onClick={() => setNavBarModal(false)}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        className="bg-white flex flex-col gap-y-4 fixed z-10 top-0 left-0 border w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
      >
        <div id="header-cart" className="my-2 w-100">
          <button
            onClick={() => setNavBarModal(false)}
            className="font-bold ml-4"
          >
            X
          </button>
        </div>
        <ul className="flex flex-col items-start gap-2">
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            {"Home".toUpperCase()}
          </NavLink>
          <NavHashLink
            to="/#Whyus"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            {"Why us".toUpperCase()}
          </NavHashLink>
          <NavHashLink
            to="/#courses"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            {"Courses".toUpperCase()}
          </NavHashLink>
          <NavHashLink
            to="/#fees"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            {"Fees".toUpperCase()}
          </NavHashLink>
          <NavHashLink
            to="/#testimonials"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            {"Testimonials".toUpperCase()}
          </NavHashLink>

          <NavHashLink
            to="/#blogs"
            className={styles.linkPages}
            onClick={() => setNavBarModal(false)}
          >
            {"Blogs".toUpperCase()}
          </NavHashLink>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;
