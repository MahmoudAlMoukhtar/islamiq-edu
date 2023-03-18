import {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import * as api from "../../api/index";
import {HiOutlineMail} from "react-icons/hi";
import {HiDevicePhoneMobile} from "react-icons/hi2";
import "./user.css";
import {toast, ToastContainer} from "react-toastify";
export default function Message() {
  const {id} = useParams();
  const [contactMessage, setContactMessage] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigait = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        //console.log(id);
        const res = await api.fetchContactMessagesId(id);
        setContactMessage(res.data);
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
        <h1 className="userTitle">Message</h1>
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
                {contactMessage.firstName} {contactMessage.lastName}
              </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                id: {contactMessage._id}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                First Name: {contactMessage.firstName}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                Last Name: {contactMessage.lastName}
              </span>
            </div>

            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <HiOutlineMail />
              <span className="userShowInfoTitle">{contactMessage.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <span className="userUpdateTitle">Message from website</span>
            <p>{contactMessage.message}</p>
          </div>

          <button
            className="userRejectButton w-full"
            onClick={async () => {
              const res = await api.deleteCommentById(contactMessage._id);
              navigait.push("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
