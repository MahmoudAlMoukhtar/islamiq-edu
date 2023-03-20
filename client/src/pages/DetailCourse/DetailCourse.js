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
const DetailCourse = () => {
  const [t, i18n] = useTranslation();
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

  //return jsx UI product
  if (loadingProduct) return <Spinner />;
  return (
    <div className="flex justify-between flex-col-reverse lg:flex-row gap-4 w-full md:px-20 lg:px-40 xl:px-60  py-4 sm:py-10">
      <div className="flex flex-col  items-start gap-20  text-black w-full rounded">
        {course.sections.map((c, i) => (
          <div className="flex flex-col items-center gap-10 w-full" key={c._id}>
            {i === 0 && (
              <div
                className={
                  i18n.language === "en"
                    ? "flex flex-col sm:flex-row sm:justify-between items-center gap-2 w-full px-4"
                    : "flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-2 w-full px-4"
                }
              >
                <h2
                  className={
                    i18n.language === "en"
                      ? "text-2xl sm:text-xl md:text-3xl font-bold w-full text-center sm:text-start"
                      : "text-2xl sm:text-xl md:text-3xl font-bold w-full text-center sm:text-end"
                  }
                >
                  {i18n.language === "en"
                    ? `${course.title}`.toUpperCase()
                    : `${course.titleAr}`.toUpperCase()}
                </h2>
                <div
                  className={
                    i18n.language === "en"
                      ? "flex justify-center"
                      : "flex flex-row-reverse justify-center"
                  }
                >
                  <a
                    href="http://wa.me/+201012750418"
                    target="blank"
                    className="flex justify-center gap-2 items-center bg-[#4caf50] py-2 px-4 sm:py-4 sm:px-8 font-bold rounded w-40 text-white"
                  >
                    <div>
                      <AiOutlineWhatsApp size={25} />
                    </div>
                    Whatsapp
                  </a>
                </div>
              </div>
            )}
            {c.image && (
              <img
                loading="lazy"
                src={c.image}
                className="w-full rounded"
                alt="course"
              />
            )}
            {c.video && (
              <iframe
                width="100%"
                className="h-[300px] sm:h-[400px] px-4"
                src={`https://www.youtube.com/embed/${c.video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
            <p className="text-lg p-4">
              {i18n.language === "en" ? c.description : c.descriptionAr}
            </p>
          </div>
        ))}
        {user && (
          <form className="my-10 flex flex-col gap-4 w-full px-4">
            <label className="flex items-center gap-4">
              <div>
                <FaQuoteLeft size={25} />
              </div>
              <p className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                {i18n.language === "en"
                  ? "Write Your Testimonial"
                  : "أكتب توصية"}
              </p>
              <div>
                <FaQuoteRight size={25} />
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
            <button
              className="p-4 w-full text-xl font-bold bg-[#4caf50] hover:bg-[#FF932D] text-white"
              onClick={handleSubmitTestmional}
            >
              {i18n.language === "en" ? "SUBMIT" : "أرسل"}
            </button>
          </form>
        )}
      </div>

      <ToastContainer theme="dark" />
    </div>
  );
};
export default DetailCourse;
/* 
      <section className="flex flex-col sm:flex-row  lg:flex-col  w-full lg:w-[700px]  lg:h-[1200px] gap-10 bg-[#4caf50] p-4 rounded text-white">
        {user && (
          <form className="my-10 flex flex-col gap-4 w-full">
            <label className="flex items-center gap-4">
              <div>
                <FaQuoteLeft size={25} />
              </div>
              <p className="text-5xl font-bold">Write Your Testimonial</p>
              <div>
                <FaQuoteRight size={25} />
              </div>
            </label>
            <textarea
              type="text"
              placeholder="Write Your Testimonial"
              className="w-full p-4 h-60"
              value={testemionalValue}
              onChange={e => setTemionalValue(e.target.value)}
            />
            <button
              className="p-4 w-full text-xl font-bold bg-[#4caf50] hover:bg-[#FF932D] text-white"
              onClick={handleSubmitTestmional}
            >
              SUBMIT
            </button>
          </form>
        )}
      </section>
*/
/* 
  <Link
                    to="/#fees"
                    className="bg-[#ffc265] py-2 px-4 sm:py-4 sm:px-8 rounded text-md w-40 font-bold"
                  >
                    {i18n.language === "en" ? "Show Fees" : "رؤية الأسعار"}
                  </Link>
*/
