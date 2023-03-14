import React from "react";
import {motion} from "framer-motion";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {BsCheck} from "react-icons/bs";
import {ImRadioUnchecked} from "react-icons/im";
import {useTranslation} from "react-i18next";
const Fees = () => {
  const [t, i18n] = useTranslation();
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      variants={item}
      id="fees"
      className="flex flex-col  justify-center items-center gap-10 mt-20 py-10 bg-[#4caf50] w-full"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-white text-center">
          {t("titleFees")}
        </h2>
        <p className="text-xl text-gray-200 font-semibold text-white">
          No contracts, No surprise fees.
        </p>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-10 justify-center w-full px-4  sm:px-40">
        <div className="flex flex-col gap-8 w-full text-white font-semibold p-4">
          <div className="flex flex-col gap-2 sm:flex-row items-center justify-between w-full">
            <h4 className="text-lg  sm:text-2xl">Details Package Selected</h4>
            <div className="flex items-center gap-2 text-black w-full sm:w-auto">
              <button className="hover:bg-[#FF932D] bg-[#FF932D] py-2 px-4 rounded-full w-full sm:w-auto">
                Monthly
              </button>
              <button className="hover:bg-[#FF932D] bg-[#ffc265] py-2 px-4 rounded-full w-full sm:w-auto">
                Yearly
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full  p-2 ">
            All Limited links
            <div className="bg-[#FF932D] rounded-full">
              <BsCheck size={25} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full  p-2 ">
            Own analytics platform
            <div className="bg-[#FF932D] rounded-full">
              <BsCheck size={25} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full  p-2 ">
            Chat support
            <div className="bg-[#FF932D] rounded-full">
              <BsCheck size={25} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full  p-2 ">
            Optimize hashtags
            <div className="bg-[#FF932D] rounded-full">
              <BsCheck size={25} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full  p-2 ">
            Un limited users
            <div className="bg-[#FF932D] rounded-full">
              <BsCheck size={25} />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="rounded-lg bg-[#EFEDD6] flex justify-between py-6 px-4 cursor-pointer border-4 border-black">
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                <BsCheck color="black" size={30} />
              </div>
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">Intro</h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs">
                  Save %20
                </p>
              </div>
            </div>
            <p className="text-sm">
              <span className=" text-4xl font-bold">$19</span>/Month
            </p>
          </div>
          <div className="rounded-lg bg-[#f5cd9c] flex justify-between py-6 px-4 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                <ImRadioUnchecked color="gray" size={30} />
              </div>
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">Base</h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs">
                  Save %20
                </p>
              </div>
            </div>
            <p className="text-sm">
              <span className=" text-4xl font-bold">$39</span>/Month
            </p>
          </div>
          <div className="rounded-lg bg-[#ffc265] flex justify-between py-6 px-4 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                <ImRadioUnchecked color="gray" size={30} />
              </div>
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">Popular</h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs">
                  Save %20
                </p>
              </div>
            </div>
            <p className="text-sm">
              <span className=" text-4xl font-bold">$99</span>/Month
            </p>
          </div>
          <div className="rounded-lg bg-[#FF932D] flex justify-between py-6 px-4 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                <ImRadioUnchecked color="gray" size={30} />
              </div>
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">Enterprise</h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs">
                  Save %20
                </p>
              </div>
            </div>
            <p className="text-sm">
              <span className=" text-4xl font-bold">$19</span>/Month
            </p>
          </div>
        </div>
      </div>
      <a
        href="http://wa.me/+201012750418"
        target="blank"
        className="flex gap-2 items-center bg-[#FF932D] rounded-full py-4 px-8 font-bold"
      >
        <div>
          <AiOutlineWhatsApp size={25} />
        </div>
        Whatsapp
      </a>
    </motion.section>
  );
};

export default Fees;

/* 
<div className="flex flex-col justify-between items-center gap-4 bg-white text-black hover:text-black pb-6 transtion duration-200  text-center w-full sm:w-[200px] md:w-[250px] lg:w-80 xl:w-96 h-[500px] rounded shadow-xl">
          <h3 className="text-3xl semibold bg-[#FF932D] text-black text-center w-full py-8 rounded-t font-bold">
            30 Min
          </h3>
          <ul className="flex flex-col items-center justify-center gap-2">
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              08 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
          </ul>
          <p className="text-sm text-gray-400">
            *Get your first Free Demo class.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-4 bg-white text-black hover:text-black pb-6 transtion duration-200  text-center w-full sm:w-[200px] md:w-[250px] lg:w-80 xl:w-96 h-[500px] rounded shadow-xl scale-110">
          <h3 className="text-3xl semibold bg-[#ffc265] text-black text-center w-full py-8 rounded-t font-bold relative 	overflow-x-hidden overflow-y-hidden">
            45 Min
            <span
              id="popular"
              className="bg-red-800 text-white font-semibold rotate-45 py-1 w-60 absolute right-[-80px] top-6 text-lg	"
            >
              POPULAR
            </span>
          </h3>
          <ul className="flex flex-col items-center justify-center gap-2">
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              08 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
          </ul>
          <p className="text-sm text-gray-400">
            *Get your first Free Demo class.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-4 bg-white text-black hover:text-black pb-6 transtion duration-200  text-center w-full sm:w-[200px] md:w-[250px] lg:w-80 xl:w-96 h-[500px] rounded shadow-xl">
          <h3 className="text-3xl semibold bg-[#EFEDD6] text-black text-center w-full py-8 rounded-t font-bold">
            60 Min
          </h3>
          <ul className="flex flex-col items-center justify-center gap-2">
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              08 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
            <li className="text-md">
              04 Class/Month ={" "}
              <span className="text-[#000] font-bold">$12</span>
            </li>
          </ul>
          <p className="text-sm text-gray-400">
            *Get your first Free Demo class.
          </p>
        </div>
*/
