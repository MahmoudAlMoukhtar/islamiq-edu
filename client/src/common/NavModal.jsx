import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";

const activeStyle = {
  color: "white",
  backgroundColor: "#34872A",
  padding: "20px 12px",
  fontWeight: "bold",
  borderLeft: "8px solid #FF932D",
};
const styles = {
  linkPages:
    "text-[#000] hover:text-white hover:text-white hover:bg-[#34872A] py-6 px-2 font-semibold w-full hover:border-l-8 hover:border-[#FF932D] hover:font-bold w-full transtion duration-200",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({setNavBarModal, navbarModal}) => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));
  const navigaite = useNavigate();
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
            end
            className={styles.linkPages}
          >
            Home
          </NavLink>
          <Link to="/#Whyus" end className={styles.linkPages}>
            Why us
          </Link>
          <Link to="/#courses" end className={styles.linkPages}>
            Courses
          </Link>
          <Link to="/#fees" end className={styles.linkPages}>
            Fees
          </Link>
          <Link to="/#testimonials" className={styles.linkPages}>
            Testimonials
          </Link>

          <Link to="/#blogs" end className={styles.linkPages}>
            Blogs
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;

/* 

*/
