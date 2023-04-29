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
    <section
      id="courses"
      className="flex flex-col  justify-center items-center  w-full mt-10"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold ">{t("titlecourses")}</h2>
        <span className="h-1 sm:h-2 w-60 bg-[#ffc265]" />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-10 lg:gap-4  w-full py-10 mt-4 sm:mt-20">
        {courses.map(c => (
          <Link
            key={c._id}
            to={`/courses/${c._id}`}
            variants={item}
            className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px] bg-[#fd5308] rounded-t-full pt-4   cursor-pointer hover:translate-y-[-10px] sm:mb-10"
          >
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              src={c.thum}
              className="w-40 sm:w-60 rounded-t-full h-[100px] sm:h-[200px] px-4 bg-[#fd5308]"
              alt="Islamic-Studies"
            />
            <h3 className="text-xs sm:text-sm  bg-[#3cc4ad] text-white w-full  sm:h-10 text-lg">
              {i18n.language === "en" ? c.title : c.titleAr}
            </h3>
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 sm:gap-10 w-full bg-[#3cc4ad] px-10 md:px-20 lg:px-40 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/rating.avif"
            className="w-20 sm:w-28"
          />
          <span
            className="flex flex-col justify-center text-6xl font-bold text-[#fd5308]"
            id="value1"
          >
            +100
          </span>
          <p
            className="text-md font-semibold"
            style={{textTransform: "uppercase"}}
          >
            {t("numbers.satisfied")}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/graduate.avif"
            className="w-20 sm:w-28"
          />
          <span className="flex flex-col justify-center text-6xl font-bold text-[#fd5308]">
            +200
          </span>
          <p
            className="text-md font-semibold"
            style={{textTransform: "uppercase"}}
          >
            {t("numbers.students")}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/teacherr.avif"
            className="w-20 sm:w-28"
          />
          <span className="text-6xl font-bold text-[#fd5308]">+30</span>
          <p
            className="text-md font-semibold"
            style={{textTransform: "uppercase"}}
          >
            {t("numbers.teacher")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
