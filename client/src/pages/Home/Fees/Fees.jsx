import React, {useState} from "react";
import {motion} from "framer-motion";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {BsCheck} from "react-icons/bs";
import {ImRadioUnchecked} from "react-icons/im";
import {useTranslation} from "react-i18next";
import FeesHeader from "../../../components/FeesHeader";
import ChoosePackages from "../../../components/Packages";
import PackagesC from "../../../components/Packages";
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
    <section
      variants={item}
      id="fees"
      className="flex flex-col justify-center items-center gap-10  py-10 bg-[#3cc4ad] w-full"
    >
      <div className={"flex flex-col items-center gap-4"}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center px-2 sm:px-0">
          {t("titleFees")}
        </h2>
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
        <FeesHeader />
      </div>

      <PackagesC />

      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-bold text-white">
          {i18n.language === "en" ? "Customised plan" : "خطّة مخصّصة"}
        </h2>
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
        <p className="text-[#fff]  text-md text-center sm:w-[600px] px-4 font-semibold">
          {i18n.language === "en"
            ? "We can offer you a customised plan if you wish. Please kindly fill in the contact form or contact us on any of this meens"
            : "نستطيع أيضاً عمل خطّة خاصة لك رجاءاً اتصل بنا أو راسلنا بإحدى طرق التواصل التالية"}
        </p>
        <div className="flex gap-2 flex-wrap sm:flex-wrap">
          <div className="flex gap-2 justify-center items-center bg-[#ffc265] rounded-full py-4 px-8 text-sm font-bold sm:font-bold w-full sm:w-auto text-center mx-2 sm:mx-0">
            iqraarabicquran@gmail.com
          </div>
          <a
            href="http://wa.me/+201012750418"
            target="blank"
            className="flex gap-2 justify-center items-center bg-[#fd5308] rounded-full py-4 px-8 text-sm font-bold sm:font-bold w-full sm:w-auto text-cente mx-2 sm:mx-0"
          >
            <div>
              <AiOutlineWhatsApp size={25} />
            </div>
            {i18n.language === "en" ? "Whatsapp" : "الواتساب"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Fees;
