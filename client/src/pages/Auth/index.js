import React, {useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import * as api from "../../api/index";
import {motion} from "framer-motion";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useDispatch} from "react-redux";
import {signin} from "../../redux/actions/auth";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import PhoneInput from "react-phone-number-input";

const initialState = {
  firstName: "",
  email: "",
  gender: "male",
  password: "",
  confirmPassword: "",
  phone: 0,
};

const Auth = () => {
  const [t, i18n] = useTranslation();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [value, setValue] = useState();
  const navigait = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    if (isSignup) {
      try {
        const {data} = await api.signup({...formData, phone: value});
        localStorage.setItem("userIqraa", JSON.stringify(data));
        navigait("/");
        toast.success("You are successfully logged in");
      } catch (err) {
        toast.error("This email may already exist, try another email");
      }
    } else {
      dispatch(signin(formData, navigait));
    }
  };

  const handleTextFieldChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center h-full mb-10  rounded w-full">
        <div>
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308701/islamiq/facebookcover_hscelo.png"
            className="w-full"
          />
        </div>
        <div className="flex flex-col  min-h-full w-full  px-4 sm:px-6 lg:px-8  text-[#000] rounded">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
              {isSignup ? t("authPage.signup") : t("authPage.login")}
            </h2>
            {isSignup && (
              <p className="mt-2 text-center text-sm text-gray-400">
                <p className="font-medium text-black">
                  {t("authPage.starfreetrail")}
                </p>
              </p>
            )}
          </div>
          <form
            dir={
              i18n.language === "en"
                ? "en"
                : "rtl"
            }
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 rounded-md shadow-sm">
              {isSignup && (
                <React.Fragment>
                  <div
                
                  >
                    <label htmlFor="firstName">{t("authPage.fn")}</label>
                    <input
                      dir={i18n.language === "en" ? "en" : "rtl"}
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder={
                        i18n.language === "en" ? "First Name" : "الاسم الأخير"
                      }
                      onChange={handleTextFieldChange}
                    />
                  </div>
                  <div
                  
                  >
                    <label htmlFor="lastName">{t("authPage.ln")}</label>
                    <input
                      dir={i18n.language === "en" ? "en" : "rtl"}
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder={
                        i18n.language === "en" ? "Last Name" : "الاسم الأخير"
                      }
                      onChange={handleTextFieldChange}
                    />
                  </div>
                  <div
                  
                  >
                    <label htmlFor="phone">{t("authPage.ph")}</label>
                    <PhoneInput
                      dir={i18n.language === "en" ? "en" : "rtl"}
                      flags={flags}
                      placeholder={
                        i18n.language === "en"
                          ? "Enter phone number"
                          : "رقم الموبايل"
                      }
                      value={value}
                      inputStyle={{
                        padding: "2px 3px !important",
                      }}
                      defaultCountry={"EG"}
                      onChange={setValue}
                      addInternationalOption={false}
                      className="w-full"
                    />
                  </div>
                  <div
                   
                  >
                    <label htmlFor="gender">{t("authPage.gn")}</label>
                    <select
                      dir={i18n.language === "en" ? "en" : "rtl"}
                      id="gender"
                      required
                      name="gender"
                      className="w-full p-4 rounded cursor-pointer"
                      onChange={handleTextFieldChange}
                    >
                      <option value={i18n.language === "en" ? "Male" : "ذكر"}>
                        Male
                      </option>
                      <option value={i18n.language === "en" ? "Fmale" : "انثى"}>
                        Fmale
                      </option>
                    </select>
                  </div>
                </React.Fragment>
              )}
              <div
               
              >
                <label htmlFor="email">{t("authPage.em")}</label>
                <input
                  dir={i18n.language === "en" ? "en" : "rtl"}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleTextFieldChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="">
                  {t("authPage.ps")}
                </label>
                <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300 w-full">
                  <input
                    dir={i18n.language === "en" ? "en" : "rtl"}
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    onChange={handleTextFieldChange}
                  />
                  {!showPassword ? (
                    <BiShowAlt
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer"
                      size={20}
                    />
                  ) : (
                    <BiHide
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer"
                      size={20}
                    />
                  )}
                </div>
                {isSignup && (
                  <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300 w-full">
                    <input
                      dir={i18n.language === "en" ? "en" : "rtl"}
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Confirm Password"
                      onChange={handleTextFieldChange}
                    />
                    {!showPassword ? (
                      <BiShowAlt
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer"
                        size={20}
                      />
                    ) : (
                      <BiHide
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer"
                        size={20}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <button className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#2e9175]">
                {isSignup ? t("authPage.signup") : t("authPage.login")}
              </button>
            </div>

            <div className="group relative flex  w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-black">
              {isSignup ? (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                  {t("authPage.haveAcc")}
                  <div
                    onClick={switchMode}
                    className="font-bold cursor-pointer"
                  >
                    {t("authPage.login")}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                  {t("authPage.dontHaveAcc")}
                  <div
                    onClick={switchMode}
                    className="font-bold cursor-pointer"
                  >
                    {t("authPage.signup")}
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
