import React, {useEffect} from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {HiMenuAlt1} from "react-icons/hi";
import {toast} from "react-toastify";
const styles = {
  linkPages:
    "text-lg md:text-lg font-semibold py-[4px] px-2 lg:px-4 hover:bg-[#FF932D] transtion duration-200 text-white rounded",
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
  const {pathname, hash, key} = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  return (
    <nav className="flex justify-between items-center gap-2 py-4 px-4 sm:px-20 md:px-20 w-full shadow-xl text-white bg-[#4caf50] ">
      <div className="flex justify-center">
        <Link to="/" className="sm:hidden">
          <div className="flex  gap-2 items-start">
            <img src="/test.png" className="w-20" alt="kapaIcon" />
          </div>
        </Link>
        <ul className="invisible absolute sm:flex sm:items-center  md:gap-2 sm:visible sm:static">
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/"
            end
            className={styles.linkPages}
          >
            Home
          </NavLink>
          <li>
            <Link to="/#Whyus" end className={styles.linkPages}>
              Why us
            </Link>
          </li>
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
      <div className="flex justify-center  md:gap-2 items-center">
        {!user ? (
          <NavLink style={({isActive}) => activeStyle} to="/auth" end>
            Free Trial
          </NavLink>
        ) : (
          <button
            className={
              "text-md font-semibold py-2 px-2 lg:px-4 bg-[#4caf50] text-[#fff] transtion duration-200  rounded text-lg"
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
/* bg-[#4caf50] */
/* <a href="#contact" end className={styles.linkPages}>
            Contact
          </a> */
