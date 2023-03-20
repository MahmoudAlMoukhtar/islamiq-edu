import {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import * as api from "../../api/index";
import {HiOutlineMail} from "react-icons/hi";
import {HiDevicePhoneMobile} from "react-icons/hi2";
import "./comment.css";
import {toast, ToastContainer} from "react-toastify";
import userImage from "../../depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

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
    <div className="comment">
      <div className="commentTitleContainer">
        <h1 className="commentTitle">Show Comment</h1>
      </div>
      <div className="commentContainer flex flex-col md:flex-row">
        <div className="commentShow">
          <div className="commentShowTop">
            <img src={userImage} alt="" className="commentShowImg" />
            <div className="commentShowTopTitle">
              <span className="commentShowcommentname">
                {commentData.firstName} {commentData.lastName}
              </span>
            </div>
          </div>
          <div className="commentShowBottom">
            <span className="commentShowTitle">Account Details</span>
            <div className="commentShowInfo">
              <span className="commentShowInfoTitle">
                Id comment: {commentData.idcomment}
              </span>
            </div>
            <div className="commentShowInfo">
              <span className="commentShowInfoTitle">
                First Name: {commentData.firstName}
              </span>
            </div>
            <div className="commentShowInfo">
              <span className="commentShowInfoTitle">
                Last Name: {commentData.lastName}
              </span>
            </div>
          </div>
        </div>
        <div
          className="commentUpdate flex flex-col justify-between w-full"
          style={{margin: 0}}
        >
          <div className="flex flex-col gap-2">
            <span className="commentUpdateTitle">Comment Message:</span>
            <p>{commentData.message}</p>
          </div>

          <button
            className="commentRejectButton w-full"
            onClick={async () => {
              const res = await api.deleteCommentById(commentData._id);
              navigait.push("/admin");
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
<span className="commentShowTitle">Contact Details</span>
            <div className="commentShowInfo">
              <HiDevicePhoneMobile />
              <span className="commentShowInfoTitle">{commentData.phone}</span>
            </div>
            <div className="commentShowInfo">
              <HiOutlineMail />
              <span className="commentShowInfoTitle">{commentData.email}</span>
            </div>
*/
