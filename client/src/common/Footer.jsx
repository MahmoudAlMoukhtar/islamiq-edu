import React from "react";
import {Link} from "react-router-dom";
import {
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillYoutube,
} from "react-icons/ai";
import {BiLocationPlus} from "react-icons/bi";
import {HiLocationMarker} from "react-icons/hi";
import {BsTelephoneFill} from "react-icons/bs";
import {Ri24HoursLine} from "react-icons/ri";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";
import {FaLanguage} from "react-icons/fa";
import {useState} from "react";
import * as api from "../api/index";
import * as EmailValidator from "email-validator";

const Footer = () => {
  const [t, i18n] = useTranslation();
  const [emailSubscripe, setEmailSubscripe] = useState();
  return (
    <footer className="flex flex-col items-center gap-10 py-10 px-4 sm:px-10 lg:px-40 w-full bg-[#4caf50]">
      <div className="flex flex-col items-center text-center sm:text-start gap-2 sm:gap-6 text-white">
        <h2 className="text-2xl sm:text-4xl font-bold">{t("footer.title")}</h2>
        <p className="text-xs w-60 sm:text-md sm:w-auto">
          {t("footer.desciptionSubscibe")}
        </p>
        <div className="flex justify-center items-center gap-2 sm:gap-6 text-black">
          <form
            className=""
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
              className="rounded-l-full border-2 border-[#FF932D] py-2 px-2 sm:px-4 "
              placeholder="example@gmail.com"
              onChange={e => {
                setEmailSubscripe(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-[#FF932D] rounded-r-full py-2 px-2 sm:px-4 border-2 border-[#FF932D] font-bold"
            >
              {t("footer.button")}
            </button>
          </form>
        </div>
      </div>
      <div
        className={
          i18n.language === "en"
            ? "flex flex-col justify-between items-center sm:flex-row sm:justify-between sm:items-start gap-10 flex-wrap sm:flex-nowrap text-white w-full"
            : "flex flex-col justify-between items-center sm:flex-row-reverse sm:justify-between sm:items-start gap-10 flex-wrap sm:flex-nowrap text-white w-full"
        }
      >
        <div
          className={
            i18n.language === "en"
              ? "flex flex-col items-center text-center sm:text-start sm:items-start gap-10 sm:gap-4 w-64"
              : "flex flex-col items-center text-center sm:text-end sm:items-end gap-10 sm:gap-4 w-64"
          }
        >
          <a href="#" className="flex  gap-2 items-center">
            <img src="/test.png" className="w-20" alt="kapaIcon" />
          </a>

          <p className="text-sm text-white">{t("footer.desciption")}</p>
          <ul className="flex items-center gap-1">
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=100090853364224"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#FF932D]"
            >
              <AiOutlineFacebook size={20} />
            </a>

            <a
              href="http://wa.me/+201012750418"
              target="blank"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#FF932D]"
            >
              <AiOutlineWhatsApp size={20} />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#FF932D]"
            >
              <AiFillYoutube size={20} />
            </a>
          </ul>
        </div>
        <section
          className={
            i18n.language === "en"
              ? "flex flex-col justify-center items-center text-center sm:flex-row  sm:justify-between sm:items-start sm:text-start sm:w-[600px] gap-10 sm:gap-4 flex-wrap sm:flex-nowrap w-full"
              : "flex flex-col justify-center items-center text-center sm:flex-row-reverse  sm:justify-between sm:items-start sm:text-start sm:w-[600px] gap-10 sm:gap-4 flex-wrap sm:flex-nowrap w-full"
          }
        >
          <div
            className={
              i18n.language === "en"
                ? "flex flex-col gap-10 sm:gap-4"
                : "flex flex-col items-end text-end gap-10 sm:gap-4"
            }
          >
            <h5 className="text-md font-bold">
              {i18n.language === "en" ? "GENERAL" : "روابط عامة"}
            </h5>
            <nav
              className={
                i18n.language === "en"
                  ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
                  : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-10 sm:gap-4"
              }
            >
              <Link to={"/"} className="text-white text-sm">
                {t("nav.home")}
              </Link>
              <Link to={"/#Whyus"} className="text-white text-sm">
                {t("nav.whyus")}
              </Link>
              <Link to={"/#courses"} className="text-white text-sm">
                {t("nav.courses")}
              </Link>
            </nav>
          </div>
          <div
            className={
              i18n.language === "en"
                ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
                : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-10 sm:gap-4"
            }
          >
            <h5 className="text-md font-bold">
              {i18n.language === "en" ? "Quick Links" : "روابط الوصول السريع"}
            </h5>
            <nav
              className={
                i18n.language === "en"
                  ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
                  : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-10 sm:gap-4"
              }
            >
              <Link to="/#blogs" className="text-white text-sm">
                {t("nav.blogs")}
              </Link>
              <Link to="/auth" className="text-white text-sm">
                {t("nav.freetrail")}
              </Link>
            </nav>
          </div>
          <div
            className={
              i18n.language === "en"
                ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
                : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-10 sm:gap-4"
            }
          >
            <h5 className="text-md font-bold">
              {i18n.language === "en" ? "Contact" : "التواصل"}
            </h5>
            <nav
              className={
                i18n.language === "en"
                  ? "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
                  : "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-end sm:text-end gap-10 sm:gap-4"
              }
            >
              <div className="flex items-center gap-2">
                <div>
                  <HiLocationMarker color="#FF932D" size={20} />
                </div>
                <div className="text-white text-sm">{t("footer.loaction")}</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <BsTelephoneFill color="#FF932D" size={20} />
                </div>
                <div className="text-white text-sm">+201012750418</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Ri24HoursLine color="#FF932D" size={20} />
                </div>
                <p className="text-white text-sm">24/7</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <AiOutlineMail color="#FF932D" size={20} />
                </div>
                <div className="text-white text-sm">
                  iqrainthenameofallah29@gmail.com
                </div>
              </div>
            </nav>
          </div>
        </section>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div>
          <FaLanguage color="#FF932D" size={50} />
        </div>
        <select
          className="text-black font-bold border-2 border-[#FF932D] bg-[#FF932D] rounded px-1 text-xs sm:px-2 sm:py-1 cursor-pointer w-40 py-2 "
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
