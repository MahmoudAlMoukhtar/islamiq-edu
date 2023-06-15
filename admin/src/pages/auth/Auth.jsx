import React, {useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {useHistory} from "react-router-dom";
import * as api from "../../api/index";
import {toast} from "react-toastify";
import jwt_decode from "jwt-decode";

const initialState = {
  email: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigait = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const {data} = await api.signin(formData);
      localStorage.setItem("userIqraa", JSON.stringify(data));
      const user = JSON.parse(localStorage.getItem("userIqraa"));
      const decoded = jwt_decode(user.token);
      if (decoded.admin) {
        toast.success("Succes Login!");
        navigait.push("/");
      } else {
        toast.error("Error!");
      }
    } catch (e) {
      toast.error("Error Login!");
    }
  };

  const handleTextFieldChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center h-full mb-10 px-4 md:px-10 lg:px-20 rounded w-full">
        <form className="mt-8 w-full" onSubmit={handleSubmit}>
          <div className=" rounded-md shadow-sm">
            <div>
              <label htmlFor="email">Email</label>
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
                Password
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
              Signin
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Auth;
