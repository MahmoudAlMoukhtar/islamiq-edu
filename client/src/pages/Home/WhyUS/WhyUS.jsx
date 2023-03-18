import React from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const WhyUS = () => {
  const [t, i18n] = useTranslation();
  const container = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
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
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="Whyus"
      className="flex flex-col  justify-center items-center gap-10 sm:gap-20 py-10"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold">{t("titlewhyus")}</h2>
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
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
            src="/icons/experience.avif"
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
            src="/icons/teacher.avif"
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
            src="/icons/onlineCourse1.avif"
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
            src="/icons/scholarship.avif"
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
            src="/icons/period.avif"
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
            src="/icons/easy-to-use.avif"
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
            src="/icons/handling.avif"
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
            src="/icons/webinar.avif"
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
            src="/icons/choice.avif"
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
            src="/icons/24-hours.avif"
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
            src="/icons/flexible.avif"
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
            src="/icons/salary.avif"
            className="w-14 sm:w-20"
            alt="salary"
          />
          <h3 className="text-xs sm:text-sm sm:font-bold">{t("whyus.12")}</h3>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyUS;
