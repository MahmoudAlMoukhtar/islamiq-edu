import {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import * as api from "../../api/index";
import {HiOutlineMail} from "react-icons/hi";
import {HiDevicePhoneMobile} from "react-icons/hi2";
import "./user.css";
import {toast, ToastContainer} from "react-toastify";
export default function Comment() {
  const {id} = useParams();
  const [commentData, setCommentData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigait = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        //console.log(id);
        const res = await api.fetchCommentById(id);
        setCommentData(res.data);
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
        <h1 className="userTitle">Show Comment</h1>
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
                {commentData.firstName} {commentData.lastName}
              </span>
              <span className="userShowUserTitle">Gender</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                Id User: {commentData.idUser}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                First Name: {commentData.firstName}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                Last Name: {commentData.lastName}
              </span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <HiDevicePhoneMobile />
              <span className="userShowInfoTitle">{commentData.phone}</span>
            </div>
            <div className="userShowInfo">
              <HiOutlineMail />
              <span className="userShowInfoTitle">{commentData.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Comment Message</span>
          <p>{commentData.message}</p>

          <button
            className="userRejectButton w-full"
            onClick={async () => {
              const res = await api.deleteCommentById(commentData._id);
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

/* 
<PermIdentity className="userShowIcon" />
<CalendarToday className="userShowIcon" />
<PhoneAndroid className="userShowIcon" />
<MailOutline className="userShowIcon" />
<LocationSearching className="userShowIcon" />
<Publish className="userUpdateIcon" />
*/
