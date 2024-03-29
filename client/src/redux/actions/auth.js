import {toast} from "react-toastify";
import * as api from "../../api/index";

export const signin = (formData, navigait) => {
  return async dispatch => {
    try {
      const {data} = await api.signin(formData);
      toast.success("Login successfully");
      dispatch({type: "SIGNIN", payload: data});
      localStorage.setItem("userIqraa", JSON.stringify(data));
      navigait("/");
    } catch (err) {
      toast.error("Email Or Password Is Not Correct!");
    }
  };
};

export const signup = formData => {
  return async dispatch => {
    const {data} = await api.signup(formData);
    toast.success("Signup successfully");
    dispatch({type: "SIGNUP", payload: data});
    localStorage.setItem("userIqraa", JSON.stringify(data));
  };
};

export const Logout = () => {
  return dispatch => {
    localStorage.removeItem("user");
    dispatch({type: "logout"});
  };
};
