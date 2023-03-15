import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Spinner from "../../Spinner";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductByIdAction} from "../../redux/actions/productsActions";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BeatLoader from "react-spinners/BeatLoader";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import * as api from "../../api/index";
import jwt_decode from "jwt-decode";
const DetailCourse = () => {
  const {id} = useParams();
  const user = JSON.parse(localStorage.getItem("userIqraa"));
  const navigate = useNavigate();
  const [testemionalValue, setTemionalValue] = useState();
  const {loadingProduct, product: course} = useSelector(
    state => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductByIdAction(id));
  }, []);
  // const urlYoutube = "https://www.youtube.com/watch?v=vfEypiTm4so";
  // const idYoutube = urlYoutube.split("?v=");
  // console.log(idYoutube);
  // const url = "https://www.youtube.com/watch?v=Zq4GAnhUq48";
  // const idUser = jwt_decode(user.token);
  const handleSubmitTestmional = async e => {
    e.preventDefault();
    const userDecoded = jwt_decode(user.token);
    const res = await api.sendTestemional({
      idUser: userDecoded.id,
      message: testemionalValue,
    });
    toast.success("Send Testimonal Succsessfully!");
  };

  //return jsx UI product
  if (loadingProduct) return <Spinner />;
  return (
    <div className="flex justify-between flex-col-reverse lg:flex-row gap-4 w-full md:px-20 lg:px-40 xl:px-60   py-10">
      <div className="flex flex-col  items-start gap-20  text-black w-full shadow-md rounded ">
        {course.sections.map((c, i) => (
          <div className="flex flex-col items-center gap-10 w-full">
            {i === 0 && (
              <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 w-full px-4">
                <h2 className="text-3xl sm:text-xl md:text-3xl font-bold w-full text-center sm:text-start">
                  {`${course.title}`.toUpperCase()}
                </h2>
                <div className="flex justify-center ">
                  <button className="bg-[#ffc265] px-4 py-2 rounded text-md w-40 font-bold">
                    Show Fees
                  </button>
                  <a
                    href="http://wa.me/+201012750418"
                    target="blank"
                    className="flex justify-center gap-2 items-center bg-[#4caf50] py-4 px-8 font-bold rounded w-40 text-white"
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
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${c.video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
            <p className="text-lg p-4">{c.description}</p>
          </div>
        ))}
        {user && (
          <form className="my-10 flex flex-col gap-4 w-full px-4">
            <label className="flex items-center gap-4">
              <div>
                <FaQuoteLeft size={25} />
              </div>
              <p className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                Write Your Testimonial
              </p>
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
