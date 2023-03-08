import React, {useState} from "react";
import {BsArrowRight} from "react-icons/bs";
import ProductSlider from "../../components/ProductsSlider";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import {motion} from "framer-motion";
import HeroSection from "./HeroSection/HeroSection";
import WhyUS from "./WhyUS/WhyUS";
import ProductsCategory from "./Courses/Courses";
import SliderProducts from "./SliderProducts/SliderPRoducts";
import {ToastContainer} from "react-toastify";
import Courses from "./Courses/Courses";
import Fees from "./Fees/Fees";
import Testimonials from "./Testimonials/Testimonials";
import BlogsSection from "./BlogsSction/BlogsSction";
import CustomizedAccordions from "./FAQ/FAQ";

const HomePage = () => {
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

  return (
    <div className="flex flex-col items-center w-full relative min-h-screen">
      <HeroSection />
      <WhyUS />
      <Courses />
      <BlogsSection />
      <Fees />
      <Testimonials />
      <CustomizedAccordions />
      <ToastContainer theme="dark" />
    </div>
  );
};

/* 

      <LandingSection />
      <ProductsCategory />
      <SliderProducts />

*/

export default HomePage;
