import React from "react";
import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/css";

const Testimonials = () => {
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      variants={item}
      id="testimonials"
      className="flex flex-col  justify-center items-center gap-20 py-10 bg-[#f2ede7] w-full"
    >
      <div className="flex flex-col items-center gap-2 md:w-[600px]">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
          Testimonials Take a Look at Some of Our Amazing Review from Students
        </h2>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <div className="flex gap-4 justify-center items-center flex-wrap w-full px-4 md:px-20 lg:px-40 xl:px-60 hidden sm:block">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          className="cursor-grap"
        >
          <SwiperSlide className="w-[500px] h-[200px]">
            <div className="flex justify-between items-start gap-4 bg-[#34872A] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 text-center w-full">
              <div className="flex flex-col items-center w-40">
                <img
                  src="/student.jpg"
                  className="w-40 rounded-md"
                  alt="experience"
                />
                <h4 className="text-sm font-bold">Atia Salimullah</h4>
                <p>Student</p>
              </div>
              <p className="text-start text-sm font-bold w-96">
                Jzk Brother. The boys led Prayer today at home. Allah gives you
                goodness in this world and the next Ameen. Jzk for being a
                brilliant teacher we are blessed. I am recommending Nour Elquran
                Academy to my friends and family.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[500px] h-[200px]">
            <div className="flex justify-between items-start gap-4 bg-[#34872A] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 text-center w-full">
              <div className="flex flex-col items-center w-40">
                <img
                  src="/student.jpg"
                  className="w-40 rounded-md"
                  alt="experience"
                />
                <h4 className="text-sm font-bold">Atia Salimullah</h4>
                <p>Student</p>
              </div>
              <p className="text-start text-sm font-bold w-96">
                Jzk Brother. The boys led Prayer today at home. Allah gives you
                goodness in this world and the next Ameen. Jzk for being a
                brilliant teacher we are blessed. I am recommending Nour Elquran
                Academy to my friends and family.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex gap-4 justify-center items-center flex-wrap w-full px-4 md:px-20 lg:px-40 xl:px-60 sm:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{clickable: true}}
          className="cursor-grab"
        >
          <SwiperSlide className="w-[500px] h-[200px] cursor-grab">
            <div className="flex justify-between items-start gap-4 bg-[#34872A] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 text-center w-full">
              <div className="flex flex-col items-center w-40">
                <img
                  src="/student.jpg"
                  className="w-40 rounded-md"
                  alt="experience"
                />
                <h4 className="text-sm font-bold">Atia Salimullah</h4>
                <p>Student</p>
              </div>
              <p className="text-start text-sm font-bold w-96">
                Jzk Brother. The boys led Prayer today at home. Allah gives you
                goodness in this world and the next Ameen. Jzk for being a
                brilliant teacher we are blessed. I am recommending Nour Elquran
                Academy to my friends and family.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[500px] h-[200px] cursor-grab">
            <div className="flex justify-between items-start gap-4 bg-[#34872A] text-white hover:bg-[#FF932D] hover:text-black p-6 py-6 transtion duration-200 text-center w-full cursor-grab">
              <div className="flex flex-col items-center w-40">
                <img
                  src="/student.jpg"
                  className="w-40 rounded-md"
                  alt="experience"
                />
                <h4 className="text-sm font-bold">Atia Salimullah</h4>
                <p>Student</p>
              </div>
              <p className="text-start text-sm font-bold w-96">
                Jzk Brother. The boys led Prayer today at home. Allah gives you
                goodness in this world and the next Ameen. Jzk for being a
                brilliant teacher we are blessed. I am recommending Nour Elquran
                Academy to my friends and family.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonials;