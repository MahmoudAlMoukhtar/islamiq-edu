import React, {useState} from "react";
import {MdLocationOn, MdOutlineEmail} from "react-icons/md";
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {motion} from "framer-motion";
import {toast, ToastContainer} from "react-toastify";
import * as api from "../../../api/index";
import {useTranslation} from "react-i18next";
const ContactPage = () => {
  const [t, i18n] = useTranslation();
  const [contactMessage, setContactMessage] = useState();
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
    <section
      variants={container}
      whileInView="visible"
      initial="hidden"
      id="contact"
      className="flex flex-col justify-between gap-8 bg-[#4caf50] w-full my-20 py-20 text-white  px-4 sm:px-10 lg:px-20 rounded-md mx-4"
    >
      <div className="flex flex-col items-center gap-2">
        {i18n.language === "en" ? (
          <h4 className="text-3xl sm:text-4xl tracking-[0.2em] font-bold text-center">
            CONTACT US
          </h4>
        ) : (
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            تواصل معنا
          </h2>
        )}
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
      </div>
      <form
        onSubmit={async e => {
          e.preventDefault();
          await api.sendContactMessage(contactMessage);
          toast.success("Submit your message in successfull");
        }}
        className={
          i18n.language === "en"
            ? "flex flex-col justify-center items-center gap-y-8"
            : "flex flex-col justify-center items-end text-end gap-y-8"
        }
      >
        <label
          for="name"
          className="text-white font-semibold flex flex-col w-[100%]"
        >
          {i18n.language === "en" ? "First Name" : "الاسم الأول"}
          <input
            required
            minLength={3}
            type="text"
            name="name"
            id="name"
            className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, firstName: e.target.value})
            }
          />
        </label>
        <label
          for="name"
          className="text-white font-semibold flex flex-col w-[100%] rounded"
        >
          {i18n.language === "en" ? "Last Name" : "الاسم الأخير"}

          <input
            required
            minLength={3}
            type="text"
            name="name"
            id="name"
            className="border-[1px] border-black px-4 py-2  w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, lastName: e.target.value})
            }
          />
        </label>
        <label for="email" className="text-white font-semibold w-[100%]">
          {i18n.language === "en" ? "Email" : "الأيميل"}

          <input
            required
            type="email"
            name="email"
            id="email"
            className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, email: e.target.value})
            }
          />
        </label>
        <label for="message" className="text-white font-semibold w-[100%]">
          {i18n.language === "en" ? "Message" : "الرسالة"}

          <textarea
            required
            minLength={100}
            name=""
            id=""
            cols={"100"}
            rows="5"
            className="border-[1px] border-black w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, message: e.target.value})
            }
          ></textarea>
        </label>
        <button className="bg-[#FF932D] p-4 font-bold text-white transtion duration-200 w-full rounded">
          {i18n.language === "en" ? "SUBMIT" : "إرسال"}
        </button>
      </form>
    </section>
  );
};
export default ContactPage;
/* 
  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 w-full text-white">
        <div className="flex flex-col gap-2 items-center bg-[#ca0202] w-full sm:w-auto p-2 sm:py-4 sm:px-8 hover:scale-105 transtion duration-500 rounded">
          <AiOutlinePhone size={30} color="white" />
          <div className="flex flex-col items-center  text-xs">
            +(314) 287-6300
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center bg-[#ca0202] w-full sm:w-auto p-2 sm:py-4 sm:px-8 hover:scale-105 transtion duration-500 rounded">
          <AiOutlineMail size={30} color="white" />
          <div className="flex flex-col items-center  text-xs">
            studds@gmail.com
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center bg-[#ca0202] w-full sm:w-auto p-2 sm:py-4 sm:px-8 hover:scale-105 transtion duration-500 rounded">
          <MdLocationOn size={30} color="white" />
          <div className="flex flex-col items-center  text-xs">
            <p>United States</p>
          </div>
        </div>
      </div>
*/
