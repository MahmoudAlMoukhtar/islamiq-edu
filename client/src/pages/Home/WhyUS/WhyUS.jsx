import React from "react";
import {motion} from "framer-motion";
const WhyUS = () => {
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
      variants={container}
      animate="visible"
      initial="hidden"
      id="Whyus"
      className="flex flex-col  justify-center items-center gap-20 py-10"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold">Why Us</h2>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <div className="flex gap-4 justify-center items-center flex-wrap">
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img
            src="/icons/experience.png"
            className="w-20 translate-x-[+10px]"
            alt="experience"
          />
          <h3 className="text-sm font-bold">Native and experienced Tutors.</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img src="/icons/teacher.png" className="w-20" alt="teaching" />
          <h3 className="text-sm font-bold">
            Male and female teachers. and One to one
          </h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img
            src="/icons/onlineCourse1.png"
            className="w-20"
            alt="online-course"
          />
          <h3 className="text-sm font-bold">
            All Islamic courses are available.
          </h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img
            src="/icons/scholarship.png"
            className="w-20"
            alt="scholarship"
          />
          <h3 className="text-sm font-bold">
            Full interrest to the educational process.
          </h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img src="/icons/period.png" className="w-20" alt="period" />
          <h3 className="text-sm font-bold">
            Periodic monitoring of students, levels and monthly reports.
          </h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img src="/icons/easy-to-use.png" className="w-20" alt="easy" />
          <h3 className="text-sm font-bold">
            Easy handling for all age groups.
          </h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img src="/icons/handling.png" className="w-20" alt="handling" />
          <h3 className="text-sm font-bold">
            Flexibility in dealing and paying expenses.
          </h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img src="/icons/webinar.png" className="w-20" alt="webinar" />
          <h3 className="text-sm font-bold">
            Freedom to choose the right course and lesson.
          </h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img src="/icons/choice.png" className="w-20" alt="choice" />
          <h3 className="text-sm font-bold">
            Independence in the hours and courses chosen by the student.
          </h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img src="/icons/24-hours.png" className="w-20" alt="24-hours" />
          <h3 className="text-sm font-bold">24-hour service, 7 days a week.</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img src="/icons/flexible.png" className="w-20" alt="flexible" />
          <h3 className="text-sm font-bold">
            Flexibility in the work invironment.
          </h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 w-60 text-center h-[200px]"
        >
          <img src="/icons/salary.png" className="w-20" alt="salary" />
          <h3 className="text-sm font-bold">
            Saving money in terms of course value.
          </h3>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUS;
