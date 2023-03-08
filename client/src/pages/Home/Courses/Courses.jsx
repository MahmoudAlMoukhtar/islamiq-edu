import React, {useEffect} from "react";
import {motion} from "framer-motion";
const Courses = () => {
  useEffect(() => {}, []);
  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
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
      id="courses"
      className="flex flex-col  justify-center items-center gap-20 mt-20 py-10 w-full"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold ">Courses</h2>
        <span className="h-2 w-60 bg-[#ffc265]" />
      </div>
      <motion.div className="flex justify-center items-center flex-wrap gap-4 w-full">
        <div
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4   cursor-pointer hover:translate-y-[-10px]"
        >
          <img
            src="/Islamic-Studies-Online.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="Islamic-Studies"
          />
          <h3 className="text-sm font-semibold bg-[#34872A] text-white w-full h-10 text-lg">
            Islamic Studies
          </h3>
        </div>
        <div
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]"
        >
          <img
            src="/Arabic.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="Arabic"
          />
          <h3 className="text-sm font-semibold bg-[#34872A] text-white w-full h-10 text-lg">
            Arabic Language
          </h3>
        </div>
        <div
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]"
        >
          <img
            src="/Quran-4.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="Quran-Memorization"
          />
          <h3 className="text-sm font-semibold bg-[#34872A] text-white w-full h-10 text-lg">
            Quran Memorization
          </h3>
        </div>
        <div
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]"
        >
          <img
            src="/tafser.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="tafser"
          />
          <h3 className="text-sm font-semibold bg-[#34872A] text-white w-full h-10 text-lg">
            Quran Tafseer
          </h3>
        </div>
        <div
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]"
        >
          <img
            src="/tajweed.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="tafser"
          />
          <h3 className="text-sm font-semibold bg-[#34872A] text-white w-full h-10 text-lg">
            Tajweed Course
          </h3>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 w-full bg-[#34872A] px-40 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <img src="/icons/rating.png" className="w-28" />
          <span
            className="flex flex-col justify-center text-6xl font-bold text-[#FF932D]"
            id="value1"
          >
            100
          </span>
          <p className="text-md font-semibold ">
            Student satisfied with the service
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <img src="/icons/graduate.png" className="w-28" />
          <span className="flex flex-col justify-center text-6xl font-bold text-[#FF932D]">
            200
          </span>
          <p className="text-md font-semibold ">Student</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <img src="/icons/teacherr.png" className="w-28" />
          <span className="text-6xl font-bold text-[#FF932D]">30</span>
          <p className="text-md font-semibold ">Teacher</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Courses;
/* f2ede7 */
/* 
<div className="flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]">
          <img
            src="/nour_albayan.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="tafser"
          />
          <h3 className="text-sm font-semibold bg-[#34872A] text-white w-full h-10 text-lg">
            Nour Al-Bayan
          </h3>
        </div>
*/
/* variants={container}
        whileInView="visible"
        initial="visible" */
/* 
      initial={{opacity: 0, y: "200px"}}
      whileInView={{opacity: 1, y: 0}}
*/