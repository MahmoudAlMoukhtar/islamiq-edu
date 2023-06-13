import React from "react";

import {
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillYoutube,
} from "react-icons/ai";
import {HiLocationMarker} from "react-icons/hi";
import {BsTelephoneFill} from "react-icons/bs";
import {Ri24HoursLine} from "react-icons/ri";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";
import {FaLanguage} from "react-icons/fa";
import {useState} from "react";
import * as api from "../api/index";
import * as EmailValidator from "email-validator";
import {HashLink} from "react-router-hash-link";

const Footer = () => {
  const [t, i18n] = useTranslation();
  const [emailSubscripe, setEmailSubscripe] = useState();
  return (
    <footer className="flex flex-col items-center gap-6 sm:gap-10 py-4 px-4 md:px-10 lg:px-40 w-full bg-[#2e9175]">
      <div className="flex flex-col items-center text-center sm:text-start gap-2 sm:gap-6 text-white">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl sm:text-4xl font-bold">
            {t("footer.title")}
          </h2>
          <p className="text-xs w-60 sm:text-md sm:w-auto">
            {t("footer.desciptionSubscibe")}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 sm:gap-6 text-black">
          <form
            onSubmit={async e => {
              e.preventDefault();
              const testValid = EmailValidator.validate(emailSubscripe);
              if (testValid) {
                await api.addEmailSubscripe({email: emailSubscripe});
                toast.success("Subscribe successfully");
              } else {
                toast.error("Error Email not validation");
              }
            }}
          >
            <input
              type="email"
              required
              className="rounded-l-full border-2 border-[#fd5308] py-2 px-2 sm:px-4 w-48 sm:w-auto"
              placeholder="example@gmail.com"
              onChange={e => {
                setEmailSubscripe(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-[#fd5308] rounded-r-full py-2 px-2 sm:px-4 border-2 border-[#fd5308] font-bold"
            >
              {t("footer.button")}
            </button>
          </form>
        </div>
      </div>
      <div
        className={
          i18n.language === "en"
            ? "flex flex-col justify-between items-center sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-10 flex-wrap sm:flex-nowrap text-white w-full"
            : "flex flex-col justify-between items-center sm:flex-row-reverse sm:justify-between sm:items-start gap-4 sm:gap-10 flex-wrap sm:flex-nowrap text-white w-full"
        }
      >
        <div
          className={
            i18n.language === "en"
              ? "px-6 sm:px-0 flex flex-col sm:justify-start  sm:text-start sm:items-start gap-4 sm:w-64 w-full"
              : "px-6 sm:px-0 flex flex-col sm:justify-end   sm:text-end sm:items-end gap-4 sm:w-64 w-full"
          }
        >
          <div
            className={
              i18n.language === "en"
                ? "flex text-center sm:text-start sm:items-start justify-between flex-col items-center gap-4 w-full"
                : "flex text-center sm:text-end sm:items-end justify-between flex-col items-center gap-4 w-full"
            }
          >
            <a href="/#" className="flex  gap-2 items-center">
              <img
                src="/test.png"
                className="w-20"
                width={80}
                height={80}
                alt="Iqra logo"
              />
            </a>

            <p className="text-sm text-white">
              {i18n.language === "en" ? (
                <span style={{textTransform: "uppercase"}}>
                  iqra arabic quran
                </span>
              ) : (
                <span>
                  اقرأ بسم الله
                  <br />
                  على الإنترنت دروس القرآن والعربية
                </span>
              )}
            </p>
          </div>
          <ul className="items-center gap-1 hidden sm:flex">
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=100090853364224"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#fd5308]"
            >
              <AiOutlineFacebook size={20} />
            </a>

            <a
              href="http://wa.me/+201012750418"
              target="blank"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#fd5308]"
            >
              <AiOutlineWhatsApp size={20} />
            </a>
            <a
              target="blank"
              href="https://www.youtube.com/channel/UCCJVbBYw65WrGfY6aovCdzA"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#fd5308]"
            >
              <AiFillYoutube size={20} />
            </a>
          </ul>
        </div>
        <section
          className={
            i18n.language === "en"
              ? "flex flex-col justify-center items-center text-center sm:flex-row  sm:justify-between sm:items-start sm:text-start sm:w-[600px] gap-8 sm:gap-4 flex-wrap sm:flex-nowrap w-full"
              : "flex flex-col justify-center items-center text-center sm:flex-row-reverse  sm:justify-between sm:items-start sm:text-start sm:w-[600px] gap-8 sm:gap-4 flex-wrap sm:flex-nowrap w-full"
          }
        >
          <ul className="flex  items-center gap-1  sm:hidden">
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=100090853364224"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#fd5308]"
            >
              <AiOutlineFacebook size={20} />
            </a>

            <a
              href="http://wa.me/+201012750418"
              target="blank"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#fd5308]"
            >
              <AiOutlineWhatsApp size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCCJVbBYw65WrGfY6aovCdzA"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#fd5308]"
            >
              <AiFillYoutube size={20} />
            </a>
          </ul>
          <div
            className={
              i18n.language === "en"
                ? "flex flex-col gap-4"
                : "flex flex-col items-end text-end gap-4"
            }
          >
            <h5 className="text-md font-bold">
              {i18n.language === "en" ? "GENERAL" : "روابط عامة"}
            </h5>
            <nav
              className={
                i18n.language === "en"
                  ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4"
                  : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-4"
              }
            >
              <HashLink
                to={"/"}
                className="text-white text-sm hover:text-[#fd5308]"
              >
                {t("nav.home")}
              </HashLink>
              <HashLink
                to={"/#Whyus"}
                className="text-white text-sm hover:text-[#fd5308]"
              >
                {t("nav.whyus")}
              </HashLink>
              <HashLink
                to={"/#courses"}
                className="text-white text-sm hover:text-[#fd5308]"
              >
                {t("nav.courses")}
              </HashLink>
            </nav>
          </div>
          <div
            className={
              i18n.language === "en"
                ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4"
                : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-4"
            }
          >
            <h5 className="text-md font-bold">
              {i18n.language === "en" ? "Quick Links" : "روابط الوصول السريع"}
            </h5>
            <nav
              className={
                i18n.language === "en"
                  ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4"
                  : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-4"
              }
            >
              <HashLink
                to="/#blogs"
                className="text-white text-sm hover:text-[#fd5308]"
              >
                {t("nav.blogs")}
              </HashLink>
              <HashLink
                to="/auth"
                className="text-white text-sm hover:text-[#fd5308]"
              >
                {t("nav.freetrail")}
              </HashLink>
            </nav>
          </div>
          <div
            className={
              i18n.language === "en"
                ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4"
                : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-4"
            }
          >
            <h5 className="text-md font-bold">
              {i18n.language === "en" ? "Contact" : "التواصل"}
            </h5>
            <nav
              className={
                i18n.language === "en"
                  ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4"
                  : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-4"
              }
            >
              <div className="flex items-center gap-2">
                <div>
                  <HiLocationMarker color="#fd5308" size={20} />
                </div>
                <div className="text-white text-sm hover:text-[#fd5308]">
                  {t("footer.loaction")}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <BsTelephoneFill color="#fd5308" size={20} />
                </div>
                <div className="text-white text-sm hover:text-[#fd5308]">
                  +201012750418
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Ri24HoursLine color="#fd5308" size={20} />
                </div>
                <p className="text-white text-sm hover:text-[#fd5308]">24/7</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <AiOutlineMail color="#fd5308" size={20} />
                </div>
                <div className="text-white text-sm hover:text-[#fd5308]">
                  iqraarabicquran@gmail.com
                </div>
              </div>
            </nav>
          </div>
        </section>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-6xl">
          <FaLanguage color="#fd5308" />
        </div>
        <select
          className="text-black font-bold border-2 border-[#fd5308] bg-[#fd5308] rounded px-1 text-xs sm:px-2 sm:py-1 cursor-pointer w-40 py-2 "
          onChange={e => i18n.changeLanguage(e.target.value)}
        >
          <option value={"en"}>English</option>
          <option value={"ar"}>العربية</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
