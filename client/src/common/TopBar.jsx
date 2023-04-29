import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {NavHashLink} from "react-router-hash-link";
import {NavLink} from "react-router-dom";
import {ImMenu} from "react-icons/im";

const TopBar = ({setNavBarModal, navbarModal}) => {
  const [t, i18n] = useTranslation();
  const styles = {
    linkPages:
      i18n.language === "en"
        ? "text-lg sm:text-[13px] md:text-[14px] lg:text-lg sm:py-1 px-2 lg:px-4 hover:bg-[#fd5308] hover:text-white transtion duration-200 text-black rounded"
        : "text-lg sm:text-[13px] md:text-[14px] lg:text-md sm:py-1 px-[6px] lg:px-4 hover:bg-[#fd5308] hover:text-white transtion duration-200 text-black rounded",
  };

  const activeStyle = {
    color: "white",
    backgroundColor: "#fd5308",
    padding: "2px 12px",
    borderRaduis: "3px",
  };

  return (
    <header
      className={
        i18n.language === "en"
          ? "flex  gap-4 justify-between items-center bg-[#f2ede7]  px-4 sm:px-10 w-full py-2 text-[#000] "
          : "flex flex-row-reverse  gap-4 justify-between items-center bg-[#f2ede7]  px-4 lg:px-20 w-full py-2 text-[#000] "
      }
    >
      <a href="/#" className="">
        <div className="flex  gap-2 items-start ">
          <img src="/test.png" className="w-20 md:w-32" alt="iqra" />
        </div>
      </a>
      <ul
        className={
          i18n.language === "en"
            ? "hidden absolute md:flex md:static sm:items-center  md:gap-2 uppercase"
            : "hidden absolute md:flex md:static sm:flex-row-reverse sm:items-center  md:gap-2 uppercase"
        }
      >
        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/"
          className={styles.linkPages}
        >
          {t("nav.home")}
        </NavLink>
        <NavHashLink to="/#Whyus" className={styles.linkPages}>
          {t("nav.whyus")}
        </NavHashLink>
        <NavHashLink to="/#courses" className={styles.linkPages}>
          {t("nav.courses")}
        </NavHashLink>
        <NavHashLink to="/#testimonials" className={styles.linkPages}>
          {t("nav.testimonials")}
        </NavHashLink>
        <NavHashLink to="/#fees" className={styles.linkPages}>
          {t("nav.fees")}
        </NavHashLink>

        <NavHashLink to="/#blogs" className={styles.linkPages}>
          {t("nav.blogs")}
        </NavHashLink>
        <NavHashLink to="/#contact" className={styles.linkPages}>
          {t("nav.contact")}
        </NavHashLink>
      </ul>
      <ImMenu
        size={35}
        color="#000"
        onClick={() => setNavBarModal(!navbarModal)}
        className="cursor-pointer text-white"
      />
    </header>
  );
};

export default TopBar;
/* 
hidden absolute sm:flex sm:static
hidden absolute sm:flex sm:static

hidden absolute sm:block sm:static
*/
