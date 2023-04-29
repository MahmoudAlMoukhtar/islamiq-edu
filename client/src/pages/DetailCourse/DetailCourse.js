import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Spinner from "../../Spinner";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductByIdAction} from "../../redux/actions/productsActions";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import * as api from "../../api/index";
import jwt_decode from "jwt-decode";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const DetailCourse = ({setContactModalShow}) => {
  const [t, i18n] = useTranslation();
  const [contactMessage, setContactMessage] = useState();
  const {id} = useParams();
  const user = JSON.parse(localStorage.getItem("userIqraa"));
  const [testemionalValue, setTemionalValue] = useState();
  const {loadingProduct, product: course} = useSelector(
    state => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductByIdAction(id));
  }, []);

  const handleSubmitTestmional = async e => {
    e.preventDefault();
    const userDecoded = jwt_decode(user.token);
    await api.sendTestemional({
      idUser: userDecoded.id,
      message: testemionalValue,
    });
    toast.success("Send Testimonal Succsessfully!");
  };
  //console.log(course);
  if (loadingProduct) return <Spinner />;
  return (
    <div className="flex justify-between flex-col md:flex-row gap-4 w-full  lg:px-20 py-4 sm:py-10">
      <div className="flex flex-col  items-start gap-10  text-black w-full rounded ">
        {course.sections.map((c, i) => (
          <div className="flex flex-col items-center gap-10 w-full" key={c._id}>
            {i === 0 && (
              <div
                className={
                  i18n.language === "en"
                    ? "flex flex-col sm:flex-row sm:justify-between items-center gap-2 w-full px-2 md:px-4"
                    : "flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-2 w-full px-2 md:px-4"
                }
              >
                <h2
                  className={
                    i18n.language === "en"
                      ? "text-xl lg:text-3xl font-bold w-full text-start"
                      : "text-xl lg:text-3xl font-bold w-full text-end"
                  }
                >
                  {i18n.language === "en"
                    ? `${course.title}`.toUpperCase()
                    : `${course.titleAr}`.toUpperCase()}
                </h2>
                <div
                  className={
                    i18n.language === "en"
                      ? "md:w-auto flex flex-row justify-center gap-1 w-full"
                      : "md:w-auto flex flex-row-reverse justify-center gap-1 w-full"
                  }
                >
                  <a
                    href="http://wa.me/+201012750418"
                    target="blank"
                    className="flex justify-center gap-2 items-center bg-[#2e9175] py-2 px-2  lg:py-4  lg:px-8 font-bold rounded w-full text-white text-xs sm:text-sm md:text-md"
                  >
                    <div>
                      <AiOutlineWhatsApp size={20} />
                    </div>
                    {i18n.language === "en" ? "Whatsapp" : "الواتساب"}
                  </a>
                  <button
                    onClick={() => setContactModalShow(true)}
                    target="blank"
                    className="flex justify-center gap-2 items-center bg-[#fd5308] py-2 px-2  lg:py-4  lg:px-8 font-bold rounded w-full text-white text-xs sm:text-sm md:text-md md:hidden"
                  >
                    {i18n.language === "en" ? "Send Message" : "أرسل رسالة"}
                  </button>
                </div>
              </div>
            )}
            {c.image && (
              <LazyLoadImage
                effect="blur"
                loading="lazy"
                width="100%"
                src={c.image}
                className="w-full rounded"
                alt="course"
              />
            )}
            {c.video && (
              <iframe
                width="100%"
                className="h-[300px] sm:h-[400px] px-2"
                src={`https://www.youtube.com/embed/${c.video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
            <p
              className={
                i18n.language === "en"
                  ? "text-start text-lg p-4 w-full"
                  : "text-end w-full"
              }
              style={{whiteSpace: "pre-wrap"}}
            >
              {i18n.language === "ar" && c.descriptionAr
                ? c.descriptionAr
                : c.description}
            </p>
          </div>
        ))}
        {user && (
          <form
            onSubmit={handleSubmitTestmional}
            className={
              i18n.language === "en"
                ? "text-xl sm:text-3xl md:text-2xl xl:text-5xl my-10 flex flex-col gap-4 w-full sm:px-4"
                : "text-xl sm:text-3xl md:text-2xl xl:text-5xl my-10 flex flex-col items-end gap-4 w-full sm:px-4"
            }
          >
            <label className="flex items-center gap-4">
              <div>
                <FaQuoteLeft />
              </div>
              <p
                className={
                  i18n.language === "en" ? "font-bold" : "font-bold text-end"
                }
              >
                {i18n.language === "en"
                  ? "Write Your Testimonial"
                  : "أكتب توصية"}
              </p>
              <div>
                <FaQuoteRight />
              </div>
            </label>
            <textarea
              type="text"
              required
              maxLength={220}
              placeholder="Write Your Testimonial"
              className="w-full p-4 h-60"
              value={testemionalValue}
              onChange={e => setTemionalValue(e.target.value)}
            />
            <button className="p-4 w-full text-xl font-bold bg-[#3cc4ad] hover:bg-[#FF932D] text-white">
              {i18n.language === "en" ? "SUBMIT" : "أرسل"}
            </button>
          </form>
        )}
      </div>
      <section
        id="contact"
        className="flex flex-col  gap-8 bg-[#3cc4ad]   w-full md:w-[500px] py-10 text-white  px-4 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2">
          {i18n.language === "en" ? (
            <h4 className="text-3xl sm:text-2xl tracking-[0.2em] font-bold text-center">
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
              required
              placeholder={
                i18n.language === "en" ? "First Name" : "الاسم الأول"
              }
              minLength={3}
              type="text"
              name="name"
              id="name"
              className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
              onChange={e =>
                setContactMessage({
                  ...contactMessage,
                  firstName: e.target.value,
                })
              }
            />
          </label>
          <label
            htmlFor="name"
            className="text-white font-semibold flex flex-col w-[100%] rounded"
          >
            {i18n.language === "en" ? "Last Name" : "الاسم الأخير"}

            <input
              required
              placeholder={
                i18n.language === "en" ? "Last Name" : "الاسم الأخير"
              }
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
          <label
            htmlFor="message"
            className="text-white font-semibold w-[100%]"
          >
            {i18n.language === "en" ? "Message" : "الرسالة"}

            <textarea
              required
              placeholder={i18n.language === "en" ? "Message" : "الرسالة"}
              minLength={10}
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
          <button className="bg-[#fd5308] p-4 font-bold text-white transtion duration-200 w-full rounded">
            {i18n.language === "en" ? "SUBMIT" : "إرسال"}
          </button>
        </form>
      </section>
      <ToastContainer theme="dark" />
    </div>
  );
};
export default DetailCourse;
