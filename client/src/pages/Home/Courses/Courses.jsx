import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProductsAction} from "../../../redux/actions/productsActions";
import "react-lazy-load-image-component/src/effects/blur.css";
import Course from "../../../components/Course";

const Courses = () => {
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const {products: courses} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, []);

  if (courses) {
    return (
      <section
        id="courses"
        className="flex flex-col  justify-center items-center  w-full mt-10"
      >
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-bold ">
            {t("titlecourses")}
          </h2>
          <span className="h-1 sm:h-2 w-60 bg-[#ffc265]" />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-10 lg:gap-4  w-full py-10 mt-4 sm:mt-20">
          {courses.map(c => (
            <Course key={c._id} c={c} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 sm:gap-10 w-full bg-[#3cc4ad] px-10 md:px-20 lg:px-40 py-6">
          <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              src="/icons/rating.png"
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
              src="/icons/graduate.png"
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
              src="/icons/teacherr.png"
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
  }
};

export default Courses;
