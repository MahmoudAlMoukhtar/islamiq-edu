import React from "react";
import {motion} from "framer-motion";
import HeroSection from "./HeroSection/HeroSection";
import WhyUS from "./WhyUS/WhyUS";
import {ToastContainer} from "react-toastify";
import Courses from "./Courses/Courses";
import Fees from "./Fees/Fees";
import Testimonials from "./Testimonials/Testimonials";
import BlogsSection from "./BlogsSction/BlogsSction";
import CustomizedAccordions from "./FAQ/FAQ";
import ContactPage from "./Contact/Contact";

const HomePage = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.7}}
      className="flex flex-col items-center w-full relative min-h-screen"
    >
      <HeroSection />
      <WhyUS />
      <Courses />
      <BlogsSection />
      <Fees />
      <Testimonials />
      <ContactPage />
      <CustomizedAccordions />
    </motion.div>
  );
};

export default HomePage;
