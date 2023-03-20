import React, {useEffect} from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";

import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {ImMenu} from "react-icons/im";

const activeStyle = {
  color: "white",
  backgroundColor: "#FF932D",
  padding: "2px 12px",
  fontWeight: "bold",
  borderRaduis: "3px",
};

const Navbar = ({setNavBarModal, navbarModal}) => {
  const user = JSON.parse(localStorage.getItem("userIqraa"));
  const [t, i18n] = useTranslation();
  const navigaite = useNavigate();
  const styles = {
    linkPages:
      i18n.language === "en"
        ? "text-lg sm:text-[13px] md:text-[16px] lg:text-lg font-semibold  sm:py-1 px-2 lg:px-4 hover:bg-[#FF932D] transtion duration-200 text-white rounded"
        : "text-lg sm:text-[13px] md:text-[14px] lg:text-md font-semibold  sm:py-1 px-[6px] lg:px-4 hover:bg-[#FF932D] transtion duration-200 text-white rounded",
  };
  return (
    <nav
      className={
        i18n.language === "en"
          ? "flex justify-between items-center gap-2 py-2 sm:py-4 px-4  lg:px-20 w-full shadow-xl text-white bg-[#4caf50]"
          : "flex flex-row-reverse justify-between items-center gap-2 py-2 sm:py-4 px-4  lg:px-20 w-full shadow-xl text-white bg-[#4caf50]"
      }
    >
      <div className="flex justify-center">
        <Link to="/" className="sm:hidden">
          <h2 className="font-bold text-xl">
            {i18n.language === "en" ? "IQRAA" : "إقرأ"}
          </h2>
        </Link>
        <ul
          className={
            i18n.language === "en"
              ? "hidden absolute sm:flex sm:items-center  md:gap-2 sm:flex sm:static"
              : "hidden absolute sm:flex sm:flex-row-reverse sm:items-center  md:gap-2 sm:flex sm:static"
          }
        >
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/"
            end
            className={styles.linkPages}
          >
            {t("nav.home")}
          </NavLink>
          <li>
            <Link to="/#Whyus" end className={styles.linkPages}>
              {t("nav.whyus")}
            </Link>
          </li>
          <Link to="/#courses" end className={styles.linkPages}>
            {t("nav.courses")}
          </Link>
          <Link to="/#testimonials" className={styles.linkPages}>
            {t("nav.testimonials")}
          </Link>
          <Link to="/#fees" end className={styles.linkPages}>
            {t("nav.fees")}
          </Link>

          <Link to="/#blogs" end className={styles.linkPages}>
            {t("nav.blogs")}
          </Link>
          <Link to="/#contact" end className={styles.linkPages}>
            {t("nav.contact")}
          </Link>
        </ul>
      </div>
      <div
        className={
          i18n.language === "en"
            ? "flex justify-center  gap-2 items-center"
            : "flex flex-row-reverse justify-center  gap-2 items-center"
        }
      >
        {!user ? (
          <NavLink
            className="font-bold px-2 py-[6px] text-xs sm:text-md sm:px-2 sm:py-2 bg-[#FF932D] transtion duration-200 text-white rounded"
            to="/auth"
            end
          >
            {t("nav.freetrail")}
          </NavLink>
        ) : (
          <button
            className="font-bold px-2 py-[6px] text-xs sm:text-md sm:px-2 sm:py-2 bg-[#FF932D] transtion duration-200 text-white rounded"
            onClick={() => {
              localStorage.removeItem("userIqraa");
              toast.success("Logout successfully");
              navigaite("/");
            }}
          >
            {t("nav.logout")}
          </button>
        )}
        <ImMenu
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
/*    <Link to="/#blogs" end className={styles.linkPages}>
            {t("nav.contact")}
          </Link> */
