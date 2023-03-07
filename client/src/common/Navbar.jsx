import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {HiMenuAlt1} from "react-icons/hi";
import {toast} from "react-toastify";

const styles = {
  linkPages:
    "text-sm md:text-lg font-semibold py-[4px] px-2 lg:px-4 hover:bg-[#FF932D] transtion duration-200 text-white rounded",
};

const activeStyle = {
  color: "white",
  backgroundColor: "#FF932D",
  padding: "4px 12px",
  fontWeight: "bold",
};

const Navbar = ({setNavBarModal, navbarModal}) => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));
  const navigaite = useNavigate();
  return (
    <nav className="flex justify-between items-center gap-2 py-4 px-4 sm:px-20 md:px-20 w-full shadow-xl text-white bg-[#34872A] ">
      <div className="flex justify-center">
        <a href="#" className="sm:hidden">
          <div className="flex  gap-2 items-start">
            <img src="/test.png" className="w-16" alt="kapaIcon" />
          </div>
        </a>
        <ul className="invisible absolute sm:flex sm:items-center  md:gap-2 sm:visible sm:static">
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/"
            end
            className={styles.linkPages}
          >
            Home
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/Whyus"
            end
            className={styles.linkPages}
          >
            Why us
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/courses"
            end
            className={styles.linkPages}
          >
            Courses
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/Fees"
            end
            className={styles.linkPages}
          >
            Fees
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/aboutUs"
            className={styles.linkPages}
          >
            Testimonials
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/contact"
            end
            className={styles.linkPages}
          >
            Contact
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/cart"
            end
            className={styles.linkPages}
          >
            Blog
          </NavLink>
        </ul>
      </div>
      <div className="flex justify-center md:gap-2 items-center">
        {!user ? (
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/auth"
            end
            className={styles.linkPages}
          >
            Login
          </NavLink>
        ) : (
          <button
            className={
              "text-sm md:text-md font-semibold py-2 px-2 lg:px-4 bg-[#34872A] text-[#fff] transtion duration-200  rounded text-lg"
            }
            onClick={() => {
              localStorage.removeItem("userEcommerce");
              toast.success("Logout successfully");
              navigaite("/");
            }}
          >
            Logout
          </button>
        )}
        <HiMenuAlt1
          size={30}
          onClick={() => setNavBarModal(!navbarModal)}
          className="cursor-pointer text-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
/* bg-[#34872A] */
