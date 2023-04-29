/* import React, {useEffect, useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {Navigate, useNavigate} from "react-router-dom";
import * as api from "../../api/index";
import {motion} from "framer-motion";
import {ToastContainer, toast} from "react-toastify";
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
  //const user = JSON.parse(localStorage.getItem("userIqraa"));
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
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className=" rounded-md shadow-sm">              
              <div>
                <label htmlFor="email">{t("authPage.em")}</label>
                <input
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
              <div className="flex flex-col">
                <label htmlFor="password" className="">
                  {t("authPage.ps")}
                </label>
                <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300">
                  <input
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
              </div>
            </div>

            <div>
              <button className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#2e9175]">
                {isSignup ? t("authPage.signup") : t("authPage.login")}
              </button>
            </div>

            <div className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-black">
              {isSignup ? (
                <div className="flex justify-center gap-2 w-full">
                  {t("authPage.haveAcc")}
                  <div
                    onClick={switchMode}
                    className="font-bold cursor-pointer"
                  >
                    {t("authPage.login")}
                  </div>
                </div>
              ) : (
                <div className="flex justify-center gap-2 w-full">
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
 */

//best way to upload images and  files to google cloud with node.js
