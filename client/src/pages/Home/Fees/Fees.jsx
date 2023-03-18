import React, {useState} from "react";
import {motion} from "framer-motion";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {BsCheck} from "react-icons/bs";
import {ImRadioUnchecked} from "react-icons/im";
import {useTranslation} from "react-i18next";
const Fees = () => {
  const [t, i18n] = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState("family");
  const packages = {
    family: {
      titleEN: "FAMILY",
      titleAR: "العائلة",

      feachersAr: [
        "هذه الباقة تناسبك عندما يلتحق بنا ثلاثة أعضاء من عائلتك.",
        "٣٠ دقيقة لكل جلسة لكل فرد.",
        "٨ جلسات خلال الشهر لكل فرد.",
        "مرونة في تحديد المواعيد.",
      ],
      feachers: [
        "When 3 members from your family join us thus package will gift you even if",
        "30 min per session for everyone",
        "8 sessions per month for everyone",
        "Flexible timing schedule",
      ],
    },
    economic: {
      titleEN: "ECONOMIC",
      titleAR: "اقتصادي",
      feachersAr: [
        "٢٠ جلسة خلال الشهر.",
        "ساعة لكل جلسة.",
        "٤ جلسات خلال الأسبوع.",
        "معلمين عرب..",
        "مرونة فى تحديد المواعيد.",
      ],
      feachers: [
        "20 sessions per month",
        "60 min per session",
        "4 session per week",
        "Flexible timing schedule",
      ],
    },
    static: {
      titleEN: "start",
      titleAR: "البداية",
      feachersAr: [
        "ثلاثون دقيقة لكل جلسة.",
        "ثلاث جلسات فس الأسبوع لكل.",
        "معلمين عرب.",
        "مرونة فى تحديد المواعيد.",
      ],
      feachers: [
        "30 Min per sesstion",
        "3 sessions per week",
        "Native teachers",
        "Flexible timing schedule",
      ],
    },
    childern: {
      titleEN: "childern",
      titleAR: "أطفال",

      feachersAr: [
        "١٥ دقيقة فى الجلسة.",
        "٣ جلسات خلال الأسبوع.",
        "أدوات تفاعلية كالألعاب والقصص والرسومات.",
        "صمم خصيصا للأطفال من عمر ٤_٦ سنوات.",
        "معلمين عرب.",
        "مرونة فى تحديد المواعيد.",
      ],
      feachers: [
        "15 min per sesstion",
        "3 sessions per week",
        "in teractive tools such as Games,stories, and drawings",
        "especially for kids from 4-6 year sold",
        "Native teachers",
        "Flexible timing schedule",
      ],
    },
  };
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
      <div className={"flex flex-col items-center gap-2"}>
        <h2 className="text-4xl font-bold text-white text-center">
          {t("titleFees")}
        </h2>
        <p className="text-xl text-gray-200 font-semibold text-white">
          No contracts, No surprise fees.
        </p>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <div
        className={
          i18n.language === "en"
            ? "flex flex-col-reverse md:flex-row gap-10 justify-center w-full px-4  sm:px-10 md:px-20"
            : "flex flex-col md:flex-row-reverse gap-10 justify-center w-full px-4  sm:px-10 md:px-20"
        }
      >
        <div
          className={
            i18n.language === "en"
              ? "flex flex-col gap-8 w-full text-white font-semibold p-4"
              : "flex flex-col items-end  gap-8 w-full text-white font-semibold p-4"
          }
        >
          <div
            className={
              i18n.language === "en"
                ? "flex flex-col gap-2 sm:flex-row items-center justify-between w-full"
                : "flex flex-col gap-2 sm:flex-row-reverse items-center justify-between w-full"
            }
          >
            <h4 className="text-lg  sm:text-2xl">
              {i18n.language === "en"
                ? "Details Package Selected"
                : "تفاصيل الباقة المُختارة "}
            </h4>
            <div className="flex items-center gap-2 text-black w-full sm:w-auto">
              <button className="hover:bg-[#FF932D] bg-[#FF932D] py-2 px-4 rounded-full w-full sm:w-auto">
                {i18n.language === "en" ? "Monthly" : "شهري"}
              </button>
            </div>
          </div>
          {selectedPackage === "family" &&
            (i18n.language === "en"
              ? packages.family.feachers.map(f => (
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                    className={
                      i18n.language === "en"
                        ? "flex items-center justify-between w-full  p-2 gap-2"
                        : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2"
                    }
                    key={f}
                  >
                    {f}
                    <div className="bg-[#FF932D] rounded-full">
                      <BsCheck size={25} />
                    </div>
                  </motion.div>
                ))
              : packages.family.feachersAr.map(f => (
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                    className={
                      i18n.language === "en"
                        ? "flex items-center justify-between w-full  p-2 gap-2"
                        : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2"
                    }
                    key={f}
                  >
                    {f}
                    <div className="bg-[#FF932D] rounded-full">
                      <BsCheck size={25} />
                    </div>
                  </motion.div>
                )))}

          {selectedPackage === "economic" &&
            (i18n.language === "en"
              ? packages.economic.feachers.map(f => (
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                    className={
                      i18n.language === "en"
                        ? "flex items-center justify-between w-full  p-2 gap-2"
                        : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2"
                    }
                    key={f}
                  >
                    {f}
                    <div className="bg-[#FF932D] rounded-full">
                      <BsCheck size={25} />
                    </div>
                  </motion.div>
                ))
              : packages.economic.feachersAr.map(f => (
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                    className={
                      i18n.language === "en"
                        ? "flex items-center justify-between w-full  p-2 gap-2"
                        : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2"
                    }
                    key={f}
                  >
                    {f}
                    <div className="bg-[#FF932D] rounded-full">
                      <BsCheck size={25} />
                    </div>
                  </motion.div>
                )))}
          {selectedPackage === "start" &&
            (i18n.language === "en"
              ? packages.static.feachers.map(f => (
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                    className={
                      i18n.language === "en"
                        ? "flex items-center justify-between w-full  p-2 gap-2"
                        : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2"
                    }
                    key={f}
                  >
                    {f}
                    <div className="bg-[#FF932D] rounded-full">
                      <BsCheck size={25} />
                    </div>
                  </motion.div>
                ))
              : packages.static.feachersAr.map(f => (
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                    className={
                      i18n.language === "en"
                        ? "flex items-center justify-between w-full  p-2 gap-2"
                        : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2"
                    }
                    key={f}
                  >
                    {f}
                    <div className="bg-[#FF932D] rounded-full">
                      <BsCheck size={25} />
                    </div>
                  </motion.div>
                )))}

          {selectedPackage === "childern" &&
            (i18n.language === "en"
              ? packages.childern.feachers.map(f => (
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                    className={
                      i18n.language === "en"
                        ? "flex items-center justify-between w-full  p-2 gap-2"
                        : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2"
                    }
                    key={f}
                  >
                    {f}
                    <div className="bg-[#FF932D] rounded-full">
                      <BsCheck size={25} />
                    </div>
                  </motion.div>
                ))
              : packages.childern.feachersAr.map(f => (
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                    className={
                      i18n.language === "en"
                        ? "flex items-center justify-between w-full  p-2 gap-2"
                        : "flex flex-row-reverse items-center justify-between w-full  p-2 gap-2"
                    }
                    key={f}
                  >
                    {f}
                    <div className="bg-[#FF932D] rounded-full">
                      <BsCheck size={25} />
                    </div>
                  </motion.div>
                )))}
        </div>
        <div className="w-full flex flex-col gap-4">
          <div
            className="rounded-lg bg-[#EFEDD6] flex justify-between py-6 sm:py-4 px-2 sm:px-4 cursor-pointer"
            onClick={() => setSelectedPackage("childern")}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                {selectedPackage === "childern" ? (
                  <BsCheck color="black" size={30} />
                ) : (
                  <ImRadioUnchecked color="gray" size={30} />
                )}
              </div>
              <div className="flex flex-col items-start">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  {i18n.language === "en" ? "CHILDERN" : "أطفال"}
                </h5>
                <h5 className="text-xl sm:text-2xl font-bold">
                  6 {i18n.language === "en" ? "HRS" : "ساعة"}
                </h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
                  {i18n.language === "en" ? "Save" : "وفّر"} $5
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                <span className="text-2xl sm:text-4xl font-bold">$25</span>
                /Month
              </p>

              <span className="line-through	 text-lg sm:text-lg font-bold">
                $30
              </span>
            </div>
          </div>
          <div
            className="rounded-lg bg-[#f5cd9c] flex justify-between py-6 sm:py-4 px-2 sm:px-4 cursor-pointer"
            onClick={() => setSelectedPackage("start")}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                {selectedPackage === "start" ? (
                  <BsCheck color="black" size={30} />
                ) : (
                  <ImRadioUnchecked color="gray" size={30} />
                )}
              </div>
              <div className="flex flex-col items-start">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  {i18n.language === "en" ? "START" : "البداية"}
                </h5>
                <h5 className="text-xl sm:text-2xl font-bold">
                  6 {i18n.language === "en" ? "HRS" : "ساعة"}
                </h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
                  {i18n.language === "en" ? "Save" : "وفّر"} $10
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                <span className="text-2xl sm:text-4xl font-bold">$50</span>
                /Month
              </p>

              <span className="line-through	 text-lg sm:text-lg font-bold">
                $60
              </span>
            </div>
          </div>
          <div
            className="rounded-lg bg-[#ffc265] flex justify-between py-6 sm:py-4 px-4 cursor-pointer"
            onClick={() => setSelectedPackage("family")}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                {selectedPackage === "family" ? (
                  <BsCheck color="black" size={30} />
                ) : (
                  <ImRadioUnchecked color="gray" size={30} />
                )}
              </div>
              <div className="flex flex-col">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  {i18n.language === "en" ? "FAMILY" : "العائلة"}
                </h5>
                <h5 className="text-xl sm:text-2xl font-bold">
                  12 {i18n.language === "en" ? "HRS" : "ساعة"}
                </h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
                  {i18n.language === "en" ? "Save" : "وفّر"} %20
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                <span className=" text-2xl sm:text-4xl font-bold">$90</span>
                /Month
              </p>

              <span className="line-through	 text-lg sm:text-lg font-bold">
                $120
              </span>
            </div>
          </div>
          <div
            className="rounded-lg bg-[#FF932D] flex justify-between py-6 sm:py-4 px-2 sm:px-4 cursor-pointer"
            onClick={() => setSelectedPackage("economic")}
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                {selectedPackage === "economic" ? (
                  <BsCheck color="black" size={30} />
                ) : (
                  <ImRadioUnchecked color="gray" size={30} />
                )}
              </div>
              <div className="flex flex-col items-start">
                <h5 className="text-xl sm:text-2xl font-semibold">
                  {i18n.language === "en" ? "ECONOMIC" : "الاقتصادي"}
                </h5>
                <h5 className="text-xl sm:text-2xl font-bold">
                  20 {i18n.language === "en" ? "HRS" : "ساعة"}
                </h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
                  {i18n.language === "en" ? "Save" : "وفّر"} $60
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                <span className="text-2xl sm:text-4xl font-bold">$140</span>
                /Month
              </p>

              <span className="line-through	 text-lg sm:text-lg font-bold">
                $200
              </span>
            </div>
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
        {i18n.language === "en" ? "Whatsapp" : "الواتساب"}
      </a>
    </motion.section>
  );
};

export default Fees;

/* 

<div className="rounded-lg bg-[#EFEDD6] flex justify-between py-6 px-4 cursor-pointer border-4 border-black">
            <div className="flex items-center gap-4">
              <div className="bg-[#fff] rounded-full">
                <BsCheck color="black" size={30} />
              </div>
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">Intro</h5>
                <p className="bg-[#fff] rounded-full py-1 px-2 text-xs">
                  {i18n.language === "en"
                  ? "Save"
                  : "وفّر"} %20
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
                  {i18n.language === "en"
                  ? "Save"
                  : "وفّر"} %20
                </p>
              </div>
            </div>
            <p className="text-sm">
              <span className=" text-4xl font-bold">$39</span>/Month
            </p>
          </div>

*/

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

/* 
   <div className={i18n.language ==="en"?"flex items-center justify-between w-full  p-2 gap-2":"flex flex-row-reverse items-center justify-between w-full  p-2 gap-2"}>
            When 3 members from your family join us thus package will gift you
            even if
            <div className="bg-[#FF932D] rounded-full">
              <BsCheck size={25} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full  p-2 ">
            30 min per session for everyone
            <div className="bg-[#FF932D] rounded-full">
              <BsCheck size={25} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full  p-2 ">
            8 sessions per month for everyone
            <div className="bg-[#FF932D] rounded-full">
              <BsCheck size={25} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full  p-2 ">
            Flexible timing schedule
            <div className="bg-[#FF932D] rounded-full">
              <BsCheck size={25} />
            </div>
          </div>
*/
