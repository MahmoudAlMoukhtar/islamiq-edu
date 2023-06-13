import React from "react";
import {useTranslation} from "react-i18next";
import {Link, NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const activeStyle = {
  color: "white",
  backgroundColor: "#3cc4ad",
  padding: "20px 12px",
  borderLeft: "8px solid #fd5308",
};

const NavbarModal = ({setNavBarModal, navbarModal}) => {
  const [t, i18n] = useTranslation();
  const styles = {
    linkPages:
      "text-[#000] hover:text-white hover:text-white hover:bg-[#3cc4ad] py-6 px-2 w-full hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200",
    navBarModalHidden: "hidden",
    navBarModal:
      "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
  };
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
        dir={i18n.language === "en" ? "en" : "rtl"}
        className={
          i18n.language === "en"
            ? "bg-white flex flex-col gap-y-4 fixed z-10 top-0 left-0 w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
            : "bg-white flex flex-col gap-y-4 fixed z-10 top-0 right-0 w-60 min-h-full shadow-2xl animate__animated animate__fadeInRight"
        }
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
          >
            {t("nav.home")}
          </NavLink>
          <HashLink to="/#Whyus" className={styles.linkPages}>
            {t("nav.whyus")}
          </HashLink>
          <HashLink to="/#courses" className={styles.linkPages}>
            {t("nav.courses")}
          </HashLink>
          <HashLink to="/#testimonials" className={styles.linkPages}>
            {t("nav.testimonials")}
          </HashLink>
          <HashLink to="/#fees" className={styles.linkPages}>
            {t("nav.fees")}
          </HashLink>

          <HashLink to="/#blogs" className={styles.linkPages}>
            {t("nav.blogs")}
          </HashLink>
          <HashLink to="/#contact" className={styles.linkPages}>
            {t("nav.contact")}
          </HashLink>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;
