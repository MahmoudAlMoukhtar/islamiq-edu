import React from "react";
import {Link} from "react-router-dom";
import {
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import {BiLocationPlus} from "react-icons/bi";
import {HiLocationMarker} from "react-icons/hi";
import {BsTelephoneFill} from "react-icons/bs";
import {Ri24HoursLine} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-10 py-10 px-4 sm:px-10 lg:px-40 w-full bg-[#34872A]">
      <div className="flex flex-col items-center text-center sm:text-start gap-2 sm:gap-6 text-white">
        <h2 className="text-2xl sm:text-4xl font-bold">
          Subscibe For Newsletter
        </h2>
        <p className="text-xs w-60 sm:text-md sm:w-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex
        </p>
        <div className="flex justify-center items-center gap-2 sm:gap-6 text-black">
          <input
            type="email"
            className="rounded-l-full border-2 border-[#FF932D] py-2 px-4 "
            placeholder="example@gmail.com"
          />
          <button className="bg-[#FF932D] rounded-r-full py-2 px-4 border-2 border-[#FF932D] font-bold">
            Subscibe
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center sm:flex-row sm:justify-between sm:items-start gap-10 flex-wrap sm:flex-nowrap text-white w-full">
        <div className="flex flex-col items-center text-center sm:text-start sm:items-start gap-10 sm:gap-4 w-64">
          <a href="#" className="flex  gap-2 items-center">
            <img src="/test.png" className="w-20" alt="kapaIcon" />
          </a>

          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <ul className="flex items-center gap-1">
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=100090853364224"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#FF932D]"
            >
              <AiOutlineFacebook size={20} />
            </a>

            <a
              target="blank"
              href="https://twitter.com/"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#FF932D]"
            >
              <AiOutlineTwitter size={20} />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/"
              className="border-[1px] border-gray-700 rounded-full p-[4px] hover:bg-[#FF932D]"
            >
              <AiFillInstagram size={20} />
            </a>
          </ul>
        </div>
        <section className="flex flex-col justify-center items-center text-center sm:flex-row  sm:justify-between sm:items-start sm:text-start sm:w-[600px] gap-10 sm:gap-4 flex-wrap sm:flex-nowrap w-full">
          <div className="flex flex-col gap-10 sm:gap-4">
            <h5 className="text-md">GENERAL</h5>
            <nav className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4">
              <Link to={"/"} className="text-white text-sm">
                HOME
              </Link>
              <Link to={"/aboutUs"} className="text-white text-sm">
                ABOUT
              </Link>
              <Link to={"/menu"} className="text-white text-sm">
                Products
              </Link>
            </nav>
          </div>
          <div className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4">
            <h5 className="text-md">Quick Links</h5>
            <nav className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4">
              <Link to={"/contact"} className="text-white text-sm">
                CONTACT US
              </Link>
              <Link to={"/cart"} className="text-white text-sm">
                Blogs
              </Link>
              <Link to={"/auth"} className="text-white text-sm">
                Signup
              </Link>
            </nav>
          </div>
          <div className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4">
            <h5 className="text-md">Contact</h5>
            <nav className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4">
              <div className="flex items-center gap-2">
                <div>
                  <HiLocationMarker color="#FF932D" size={20} />
                </div>
                <a
                  target="blank"
                  href="https://www.facebook.com/"
                  className="text-white text-sm"
                >
                  Egypt
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <BsTelephoneFill color="#FF932D" size={20} />
                </div>
                <a
                  target="blank"
                  href="https://www.facebook.com/"
                  className="text-white text-sm"
                >
                  +966534686903
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Ri24HoursLine color="#FF932D" size={20} />
                </div>
                <p className="text-white text-sm">24/7</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <AiOutlineMail color="#FF932D" size={20} />
                </div>
                <a
                  target="blank"
                  href="https://www.facebook.com/"
                  className="text-white text-sm"
                >
                  iqrainthenameofallah29@gmail.com
                </a>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
/* 
<a
                target="blank"
                href="https://www.instagram.com/"
                className="text-white text-sm"
              >
                INSTGRAM
              </a>
              <a
                target="blank"
                href="https://twitter.com/"
                className="text-white text-sm"
              >
                TWITTER
              </a>

*/
