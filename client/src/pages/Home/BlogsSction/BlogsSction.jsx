import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import "swiper/css";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {Link} from "react-router-dom";
import * as api from "../../../api/index";

const BlogItem = ({b}) => {
  return (
    <Link
      to={`/blogs/${b._id}`}
      className="flex flex-col items-start justify-between gap-10 w-96 rounded shadow-xl text-start  sm:h-[550px] hover:scale-105 transtion duration-200"
    >
      <LazyLoadImage
        effect="blur"
        loading="lazy"
        src={b.image}
        className="w-96 h-[250px] rounded-t-md"
      />
      <div className="flex flex-col justify-end items-start gap-10 text-start h-full w-full">
        <p className="text-2xl font-semibold  px-4">{b.title}</p>
        <p className="w-full  px-4">{b.message}</p>
        <button className="rounded bg-[#FF932D] py-2 px-4 w-full">
          See more
        </button>
      </div>
    </Link>
  );
};

const BlogsSection = () => {
  const [t, i18n] = useTranslation();
  const [blogsData, setBlogsData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const makeRequest = async () => {
      const res = await api.fetchPosts();
      setBlogsData(res.data);
      setLoading(false);
    };
    makeRequest();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <motion.section
      id="blogs"
      className="flex flex-col  justify-center items-center gap-10 py-10 bg-[#f2ede7] w-full my-40"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-center">{t("titleblogs")}</h2>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>

      <div className="flex gap-20 sm:gap-4 justify-center items-center flex-wrap w-full px-4 sm:px-20">
        {blogsData.map(b => (
          <BlogItem b={b} />
        ))}
      </div>
      <button className="flex gap-2 items-center bg-[#FF932D] rounded-full py-4 px-8 font-bold">
        {t("titleblogs")}
      </button>
    </motion.section>
  );
};

export default BlogsSection;
/* 
<div className="flex flex-col items-start justify-center gap-10 w-96 rounded shadow-xl text-start  sm:h-[550px] hover:scale-105 transtion duration-200">
          <img
            effect="blur"
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308704/islamiq/mohammed-300x300_qkp1eq.jpg"
            className="w-full h-[250px] rounded-t-md"
          />
          <div className="flex flex-col  items-start gap-10 text-start h-full px-4">
            <p className="text-2xl font-semibold">
              10 Top Tips To Memorize Quran
            </p>
            <p>
              Memorizing Quran is a great spiritual, physical, and mental
              journey that enlightens your heart, mind, and whole life. That’s
              why you see Muslims across the
            </p>
            <button className="rounded bg-[#FF932D] py-2 px-4 w-full">
              See more
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-10 w-96 rounded shadow-xl text-start  sm:h-[550px] hover:scale-105 transtion duration-200">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308674/islamiq/vecteezy_verses-of-the-holy-quran_6034228_263_anazif.jpg"
            className="w-full h-[250px] rounded-t-md"
          />
          <div className="flex flex-col  items-start gap-10 text-start h-full px-4">
            <p className="text-2xl font-semibold">
              10 Top Tips To Memorize Quran
            </p>
            <p>
              Memorizing Quran is a great spiritual, physical, and mental
              journey that enlightens your heart, mind, and whole life. That’s
              why you see Muslims across the
            </p>
            <Link
              to="/blogs/blog"
              className="rounded bg-[#FF932D]  py-2 px-4 w-full"
            >
              See more
            </Link>
          </div>
        </div>

        Memorizing Quran is a great spiritual, physical, and mental journey
          that enlightens your heart, mind, and whole life. That’s why you see
          Muslims across the
*/
