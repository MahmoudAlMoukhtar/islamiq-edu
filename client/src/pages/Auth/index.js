import React, {useEffect, useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import * as api from "../../api/index";
import {motion} from "framer-motion";
import {ToastContainer} from "react-toastify";
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
      const {data} = await api.signup({...formData, phone: value});
      localStorage.setItem("userIqraa", JSON.stringify(data));
      navigait("/");
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
      <div className="flex flex-col justify-center items-center h-full mb-10  rounded">
        <div className=" ">
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
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className=" rounded-md shadow-sm">
              {isSignup && (
                <React.Fragment>
                  <div>
                    <label htmlFor="firstName" className="">
                      {t("authPage.fn")}
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="First Name"
                      onChange={handleTextFieldChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="">
                      {t("authPage.ln")}
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Last Name"
                      onChange={handleTextFieldChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="">
                      {t("authPage.ph")}
                    </label>

                    <PhoneInput
                      flags={flags}
                      placeholder="Enter phone number"
                      value={value}
                      inputStyle={{
                        padding: "2px 3px !important",
                      }}
                      defaultCountry={"EG"}
                      onChange={setValue}
                      addInternationalOption={false}
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="gender" className="">
                      {t("authPage.gn")}
                    </label>
                    <select
                      id="gender"
                      required
                      name="gender"
                      className="w-full p-4 rounded cursor-pointer"
                      onChange={handleTextFieldChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Fmale">Fmale</option>
                    </select>
                  </div>
                </React.Fragment>
              )}
              <div>
                <label htmlFor="email" className="">
                  {t("authPage.em")}
                </label>
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
                      className="cursor-pointer "
                      size={20}
                    />
                  ) : (
                    <BiHide
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer "
                      size={20}
                    />
                  )}
                </div>
                {isSignup && (
                  <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300">
                    <input
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
                        className="cursor-pointer "
                        size={20}
                      />
                    ) : (
                      <BiHide
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer "
                        size={20}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#34872A]"
              >
                {isSignup ? t("authPage.signup") : t("authPage.login")}
              </button>
            </div>

            <div className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-black">
              {isSignup ? (
                <div>
                  {t("authPage.haveAcc")}{" "}
                  <button onClick={switchMode} className="font-bold">
                    {t("authPage.login")}
                  </button>
                </div>
              ) : (
                <div>
                  {t("authPage.dontHaveAcc")}{" "}
                  <button onClick={switchMode} className="font-bold">
                    {t("authPage.signup")}
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default Auth;
/* 
    <input
                      id="phone"
                      name="phone"
                      type="number"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Phone"
                      onChange={handleTextFieldChange}
                    />
*/
