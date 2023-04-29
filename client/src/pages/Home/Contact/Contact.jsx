import React, {useState} from "react";
import {motion} from "framer-motion";
import {toast} from "react-toastify";
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
      id="contact"
      className="flex flex-col justify-between gap-8 bg-[#3cc4ad] w-full mb-10 py-10  text-white  px-4 sm:px-10 lg:px-20  mx-4"
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
          htmlFor="name"
          className="text-white font-semibold flex flex-col w-[100%]"
        >
          {i18n.language === "en" ? "First Name" : "الاسم الأول"}
          <input
            dir={i18n.language === "en" ? "en" : "rtl"}
            required
            placeholder={i18n.language === "en" ? "First Name" : "الاسم الأول"}
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
          htmlFor="name"
          className="text-white font-semibold flex flex-col w-[100%] rounded"
        >
          {i18n.language === "en" ? "Last Name" : "الاسم الأخير"}

          <input
            dir={i18n.language === "en" ? "en" : "rtl"}
            required
            placeholder={i18n.language === "en" ? "Last Name" : "الاسم الأخير"}
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
        <label htmlFor="email" className="text-white font-semibold w-[100%]">
          {i18n.language === "en" ? "Email" : "الأيميل"}

          <input
            dir={i18n.language === "en" ? "en" : "rtl"}
            required
            placeholder={i18n.language === "en" ? "Email" : "الإيميل"}
            type="email"
            name="email"
            id="email"
            className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, email: e.target.value})
            }
          />
        </label>
        <label htmlFor="message" className="text-white font-semibold w-[100%]">
          {i18n.language === "en" ? "Message" : "الرسالة"}

          <textarea
            dir={i18n.language === "en" ? "en" : "rtl"}
            required
            placeholder={i18n.language === "en" ? "Message" : "الرسالة"}
            minLength={10}
            name="message"
            id="message"
            cols={"100"}
            rows="5"
            className="border-[1px] border-black px-4 py-2 w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, message: e.target.value})
            }
          ></textarea>
        </label>
        <button className="bg-[#fd5308] p-4 font-bold text-white transtion duration-200 w-full rounded">
          {i18n.language === "en" ? "SUBMIT" : "إرسال"}
        </button>
      </form>
    </section>
  );
};
export default ContactPage;
