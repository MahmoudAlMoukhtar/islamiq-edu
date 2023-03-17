import React from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const WhyUS = () => {
  const [t, i18n] = useTranslation();
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
      whileInView="visible"
      initial="hidden"
      id="Whyus"
      className="flex flex-col  justify-center items-center gap-20 py-10"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold">{t("titlewhyus")}</h2>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        className="flex gap-4 justify-center items-center flex-wrap"
      >
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/experience.png"
            className="w-14 sm:w-20 translate-x-[+10px]"
            alt="experience"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.1")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/teacher.png"
            className="w-14 sm:w-20"
            alt="teaching"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.2")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/onlineCourse1.png"
            className="w-14 sm:w-20"
            alt="online-course"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.3")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/scholarship.png"
            className="w-14 sm:w-20"
            alt="scholarship"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.4")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/period.png"
            className="w-14 sm:w-20"
            alt="period"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.5")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/easy-to-use.png"
            className="w-14 sm:w-20"
            alt="easy"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.6")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/handling.png"
            className="w-14 sm:w-20"
            alt="handling"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.7")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/webinar.png"
            className="w-14 sm:w-20"
            alt="webinar"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.8")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/choice.png"
            className="w-14 sm:w-20"
            alt="choice"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.9")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/24-hours.png"
            className="w-14 sm:w-20"
            alt="24-hours"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.10")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/flexible.png"
            className="w-14 sm:w-20"
            alt="flexible"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.11")}</h3>
        </motion.div>
        <motion.div
          variants={item}
          className="item flex flex-col items-center gap-2 sm:gap-4 bg-[#4caf50] text-white hover:bg-[#FF932D] hover:text-black px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]"
        >
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src="/icons/salary.png"
            className="w-14 sm:w-20"
            alt="salary"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.12")}</h3>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WhyUS;
