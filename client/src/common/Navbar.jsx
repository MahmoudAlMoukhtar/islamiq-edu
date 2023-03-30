import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("userIqraa"));
  const [t, i18n] = useTranslation();
  const navigaite = useNavigate();

  return (
    <nav
      className={
        i18n.language === "en"
          ? "flex flex-col md:flex-row justify-between items-center gap-2 py-2 sm:py-4 px-4  lg:px-10 w-full shadow-xl text-white bg-[#3cc4ad]"
          : "flex flex-col md:flex-row-reverse justify-between items-center gap-2 py-2 sm:py-4 px-4  lg:px-10 w-full shadow-xl text-white bg-[#3cc4ad]"
      }
    >
      <div className="flex justify-center gap-2 sm:gap-4">
        <div target="blank" className="flex items-center gap-2">
          <AiOutlineMail className="text-md sm:text-xl" />
          <div className="flex flex-col text-center text-xs md:text-lg">
            <p className="text-[10px] sm:text-md sm:font-bold">
              iqrainthenameofallah29@gmail.com
            </p>
          </div>
        </div>
        <a
          target="blank"
          href="http://wa.me/+201012750418"
          className="flex items-center gap-2"
        >
          <AiOutlineWhatsApp className="text-md sm:text-xl" />
          <div className="flex flex-col text-center text-xs md:text-lg">
            <p className="text-xs sm:text-md sm:font-bold">+201012750418</p>
          </div>
        </a>
      </div>
      <div
        className={
          i18n.language === "en"
            ? "flex justify-center  gap-2 items-center"
            : "flex flex-row-reverse justify-center  gap-2 items-center"
        }
      >
        <ul className="flex items-center gap-2">
          <a
            target="blank"
            href="https://www.facebook.com/profile.php?id=100090853364224"
            className="rounded-full p-[4px] hover:bg-[#fd5308]"
          >
            <AiFillFacebook size={25} />
          </a>
          <a
            href="http://wa.me/+201012750418"
            target="blank"
            className="rounded-full p-[4px] hover:bg-[#fd5308]"
          >
            <AiOutlineWhatsApp size={25} />
          </a>

          <a
            target="blank"
            href="https://www.youtube.com/channel/UC5oDD19WtYccO99HBVlSAoQ"
            className="rounded-full p-[4px] hover:bg-[#fd5308]"
          >
            <AiFillYoutube size={25} />
          </a>
        </ul>

        {!user ? (
          <NavLink
            className="font-semibold sm:font-bold text-sm sm:text-md py-[6px] px-4 bg-[#fd5308] transtion duration-200 text-white rounded"
            to="/auth"
          >
            {t("nav.freetrail")}
          </NavLink>
        ) : (
          <button
            className="font-semibold sm:font-bold text-sm sm:text-md py-[6px] px-4 bg-[#fd5308] transtion duration-200 text-white rounded"
            onClick={() => {
              localStorage.removeItem("userIqraa");
              toast.success("Logout successfully");
              navigaite("/");
            }}
          >
            {t("nav.logout")}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
