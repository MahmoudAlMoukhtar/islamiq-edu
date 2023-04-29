import React from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import {Autoplay, Navigation} from "swiper";
import {motion} from "framer-motion";
import "swiper/css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <AiOutlineArrowRight className="cursor-pointer font-bold" size={20} />
    </button>
  );
};
const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <AiOutlineArrowLeft className="cursor-pointer font-bold" size={20} />
    </button>
  );
};

const HeroSection = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className=" flex justify-center text-black  w-full sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] overflow-y-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        initialSlide={0}
        loop={true}
        navigation
        autoplay={{delay: 4000}}
        className="cursor-grap"
      >
        <SwiperSlide className="" key="top-view-islamic ke">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            width="100%"
            src="/top-view-islamic-new-year-concept-with-copy-space.avif"
            className="w-full relative object-cover	h-[300px] sm:h-full brightness-[0.70]"
            alt="heroimage"
          />
          <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-50%] sm:translate-y-[-80%]">
            <SlidePrevButton />
            <div className="flex flex-col items-center bg-[#3cc4ad] p-2 rounded-b text-white gap-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-[#3cc4ad]  rounded text-black">
                {t("mainSlider.1.title")}
              </h1>

              <p className="text-sm sm:text-lg font-semibold w-80 sm:w-auto bg-[#3cc4ad] rounded-b text-black">
                {t("mainSlider.1.desciption")}
              </p>
            </div>
            <a
              href="#fees"
              className="py-2 px-8 rounded bg-[#fd5308] text-white font-bold text-black chatWidget"
            >
              {t("mainSlider.1.button")}
            </a>
            <SlideNextButton />
          </div>
        </SwiperSlide>

        <SwiperSlide className="" key="quran2.avif">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            width="100%"
            src="/quran2.avif"
            className="w-full relative object-cover	h-[300px] sm:h-full brightness-[0.70]"
          />
          <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-50%] sm:translate-y-[-80%] ">
            <SlidePrevButton />

            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold bg-[#3cc4ad] p-2 rounded text-black">
              {t("mainSlider.3.title")}
            </h1>

            <Link
              to="/auth"
              className="py-2 px-8 rounded bg-[#fd5308] text-white font-bold text-black"
            >
              {t("mainSlider.3.button")}
            </Link>
            <SlideNextButton />
          </div>
        </SwiperSlide>
        <SwiperSlide className="" key="photo1678924784">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            width="100%"
            src="/vecteezy_verses-of-the-holy-quran_6034228_263.avif"
            className="w-full relative object-cover h-[300px] sm:h-full brightness-[0.70]"
          />
          <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-50%] sm:translate-y-[-80%] ">
            <SlidePrevButton />

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black bg-[#3cc4ad] p-2 rounded">
              {t("mainSlider.2.title")}
            </h1>

            <a
              href="#courses"
              className="py-2 px-8 rounded bg-[#fd5308] text-white font-bold text-black"
            >
              {t("mainSlider.2.button")}
            </a>
            <SlideNextButton />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
/* className="flex flex-col items-center justify-center gap-8 my-20 w-full" */
/* f9b88e */
/* 
 <SwiperSlide>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308674/islamiq/vecteezy_verses-of-the-holy-quran_6034228_263_anazif.jpg"
              className="w-full relative object-cover	h-full"
            />
            <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-80%]">
              <SlidePrevButton />
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                {t("mainSlider.2.title")}
              </p>
              <p className="text-sm sm:text-lg font-semibold w-80 sm:w-auto">{t("mainSlider.2.desciption")}</p>
              <a
                href="#courses"
                className="py-2 px-8 rounded bg-[#3cc4ad] text-white font-bold text-black"
              >
                {t("mainSlider.2.button")}
              </a>
              <SlideNextButton />
            </div>
          </SwiperSlide>
*/
/* 
<p className="text-sm sm:text-lg font-semibold w-80 sm:w-auto">
                {t("mainSlider.3.desciption")}
              </p>
<p className="text-sm sm:text-lg font-semibold w-80 sm:w-auto">
                {t("mainSlider.2.desciption")}
              </p>
*/
