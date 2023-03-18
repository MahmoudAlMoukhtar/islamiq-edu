import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {useDispatch, useSelector} from "react-redux";
const Courses = () => {
  const [t, i18n] = useTranslation();
  const {products: courses} = useSelector(state => state.products);
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section
      whileInView={{y: 0, opacity: 1}}
      initial={{y: "100px", opacity: 0}}
      transition={{duration: 0.7}}
      id="courses"
      className="flex flex-col  justify-center items-center  mt-20 py-10 w-full"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold ">{t("titlecourses")}</h2>
        <span className="h-1 sm:h-2 w-60 bg-[#ffc265]" />
      </div>
      <motion.div className="flex justify-center items-center flex-wrap gap-4 sm:gap-10 lg:gap-4  w-full py-10 mt-4 sm:mt-20">
        {courses
          .map(c => (
            <Link
              key={c._id}
              to={`/courses/${c._id}`}
              variants={item}
              className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px] bg-[#FF932D] rounded-t-full pt-4   cursor-pointer hover:translate-y-[-10px] sm:mb-10"
            >
              <LazyLoadImage
                effect="blur"
                loading="lazy"
                src={c.thum}
                className="w-40 sm:w-60 rounded-t-full h-[100px] sm:h-[200px] px-4 bg-[#FF932D]"
                alt="Islamic-Studies"
              />
              <h3 className="text-xs sm:text-sm font-semibold bg-[#4caf50] text-white w-full h-6 sm:h-10 text-lg">
                {i18n.language === "en" ? c.title : c.titleAr}
              </h3>
            </Link>
          ))
          .slice(0, 5)}
      </motion.div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 w-full bg-[#4caf50] px-40 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/rating.png"
            className="w-28"
          />
          <span
            className="flex flex-col justify-center text-6xl font-bold text-[#FF932D]"
            id="value1"
          >
            100
          </span>
          <p className="text-md font-semibold ">{t("numbers.satisfied")}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/graduate.png"
            className="w-28"
          />
          <span className="flex flex-col justify-center text-6xl font-bold text-[#FF932D]">
            200
          </span>
          <p className="text-md font-semibold ">{t("numbers.students")}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/teacherr.png"
            className="w-28"
          />
          <span className="text-6xl font-bold text-[#FF932D]">30</span>
          <p className="text-md font-semibold ">{t("numbers.teacher")}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Courses;
/* f2ede7 */
/* 
<div className="flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]">
          <LazyLoadImage
            effect="blur" loading="lazy"
            src="/nour_albayan.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="tafser"
          />
          <h3 className="text-sm font-semibold bg-[#4caf50] text-white w-full h-10 text-lg">
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
/* 
 <div
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4   cursor-pointer hover:translate-y-[-10px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308415/islamiq/Islamic-Studies-Online_voji5s.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="Islamic-Studies"
          />
          <h3 className="text-sm font-semibold bg-[#4caf50] text-white w-full h-10 text-lg">
            Islamic Studies
          </h3>
        </div>
        <div
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308808/islamiq/Arabic_ivxwki.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="Arabic"
          />
          <h3 className="text-sm font-semibold bg-[#4caf50] text-white w-full h-10 text-lg">
            Arabic Language
          </h3>
        </div>
        <Link
          to="/courses/Quran"
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678307652/islamiq/Quran-4_bodw6r.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="Quran-Memorization"
          />
          <h3 className="text-sm font-semibold bg-[#4caf50] text-white w-full h-10 text-lg">
            Quran Memorization
          </h3>
        </Link>
        <div
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308736/islamiq/tafser_lyas9j.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="tafser"
          />
          <h3 className="text-sm font-semibold bg-[#4caf50] text-white w-full h-10 text-lg">
            Quran Tafseer
          </h3>
        </div>
        <div
          variants={item}
          className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-60 text-center h-[200px] bg-[#FF932D] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308744/islamiq/tajweed_oloxd2.jpg"
            className="w-60  rounded-t-full h-[200px] px-4"
            alt="tafser"
          />
          <h3 className="text-sm font-semibold bg-[#4caf50] text-white w-full h-10 text-lg">
            Tajweed Course
          </h3>
        </div>
*/
