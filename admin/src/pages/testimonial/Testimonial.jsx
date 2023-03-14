import {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import * as api from "../../api/index";
import {HiOutlineMail} from "react-icons/hi";
import {HiDevicePhoneMobile} from "react-icons/hi2";
import "./user.css";
import {toast, ToastContainer} from "react-toastify";
export default function Testimonial() {
  const {id} = useParams();
  const [testimonialData, setTestimonialData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigait = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        console.log(id);
        const res = await api.fetchTestimonialById(id);
        setTestimonialData(res.data);
        //console.log(res.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Show Testimonial</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={
                "/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {testimonialData.firstName} {testimonialData.lastName}
              </span>
              <span className="userShowUserTitle">
                Gender: {testimonialData.gender}
              </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                First Name: {testimonialData.firstName}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                Last Name: {testimonialData.lastName}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                Gender: {testimonialData.gender}
              </span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <HiDevicePhoneMobile />
              <span className="userShowInfoTitle">{testimonialData.phone}</span>
            </div>
            <div className="userShowInfo">
              <HiOutlineMail />
              <span className="userShowInfoTitle">{testimonialData.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Testimoial</span>
          <p>{testimonialData.message}</p>
          <button
            className="userAcceptButton w-full mb-2"
            onClick={() => {
              const res = api.updateTestimonial(testimonialData._id, {
                display: true,
              });
              toast.success(
                "This Testimonial Is Display On Main Website In Success"
              );
            }}
          >
            Accept
          </button>
          <button
            className="userRejectButton w-full"
            onClick={() => {
              const res = api.deleteTestimonialById(testimonialData._id);
              navigait.push("/");
            }}
          >
            Reject
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

/* 
<PermIdentity className="userShowIcon" />
<CalendarToday className="userShowIcon" />
<PhoneAndroid className="userShowIcon" />
<MailOutline className="userShowIcon" />
<LocationSearching className="userShowIcon" />
<Publish className="userUpdateIcon" />
*/
