import React from "react";
import {motion} from "framer-motion";
import {AiOutlineWhatsApp} from "react-icons/ai";
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
      className="flex flex-col  justify-center items-center gap-20 mt-20 py-10 bg-[#4caf50] w-full"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-white">{t("titleFees")}</h2>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <div className="flex flex-col sm:flex-row gap-[-2px] justify-center items-center w-full px-10 sm:px-1">
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
