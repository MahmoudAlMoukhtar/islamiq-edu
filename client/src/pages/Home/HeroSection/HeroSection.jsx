import React from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import {Autoplay, Navigation} from "swiper";
import {motion} from "framer-motion";
import "swiper/css";
import {Link} from "react-router-dom";

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <AiOutlineArrowRight className="cursor-pointer font-bold" size={30} />
    </button>
  );
};
const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <AiOutlineArrowLeft className="cursor-pointer font-bold" size={30} />
    </button>
  );
};

const HeroSection = () => {
  return (
    <div id="hero" className="flex w-full min-h-screen w-full">
      <div className=" flex justify-center text-black  w-full">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={0}
          loop={true}
          navigation
          autoplay={{delay: 2000}}
          className="cursor-grap"
        >
          <SwiperSlide className="">
            <img
              src="/top-view-islamic-new-year-concept-with-copy-space.jpg"
              className="w-full relative object-cover	h-full"
              alt="heroimage"
            />
            <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-80%]">
              <SlidePrevButton />
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Highest Quality & Low Fees
              </p>
              <p className="font-semibold">
                Our Academy is an academy for Arabic and Quran Studies.
              </p>
              <a
                href="#fees"
                className="py-2 px-8 rounded bg-[#34872A] text-white font-bold text-black"
              >
                Show Fees
              </a>
              <SlideNextButton />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Quran-4.jpg"
              className="w-full relative object-cover	h-full"
            />
            <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-80%]">
              <SlidePrevButton />
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Islam company for learn islamiq scince
              </p>
              <p className="font-semibold">
                We want to make the process of Quran teaching easier for
                everyone
              </p>
              <a
                href="#courses"
                className="py-2 px-8 rounded bg-[#34872A] text-white font-bold text-black"
              >
                Our courses
              </a>
              <SlideNextButton />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/quran2.jpg"
              className="w-full relative object-cover	h-full"
            />
            <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-80%]">
              <SlidePrevButton />
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Register Now
              </p>
              <p className="font-semibold">
                We are offering our services for every individual nu ignoring
                the age and gender factor.
              </p>
              <Link
                to="/auth"
                className="py-2 px-8 rounded bg-[#34872A] text-white font-bold text-black"
              >
                Login
              </Link>
              <SlideNextButton />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
/* className="flex flex-col items-center justify-center gap-8 my-20 w-full" */
/* f9b88e */
