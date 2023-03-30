import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import {useTranslation} from "react-i18next";
import moment from "moment";
import * as api from "../../../api/index";
const Comments = ({post}) => {
  const user = JSON.parse(localStorage.getItem("userIqraa"));
  let userDecoded;
  if (user) {
    userDecoded = jwt_decode(user.token);
  }
  const [t, i18n] = useTranslation();
  const [commentsData, setCommentsData] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const makeRequest = async () => {
      const res = await api.fetchComments();
      const filterComments = res.data.filter(c => c.idParent === post._id);
      setCommentsData(filterComments);
    };
    makeRequest();
  }, []);
  const handleSubmitComment = async e => {
    e.preventDefault();
    const res = await api.createComment({
      idParent: post._id,
      idUser: userDecoded.id,
      message: comment,
    });
    if (res.data.idParent === post._id) {
      setCommentsData([...commentsData, res.data]);
    }
  };
  const handleDeletComment = async idComment => {
    const res = await api.deletCommentById(idComment);
    if (res.data.idParent === post._id) {
      const filterdComments = commentsData.filter(c => c._id !== res.data._id);
      setCommentsData(filterdComments);
    }
  };

  return (
    <div
      className={
        i18n.language === "en"
          ? "flex justify-end flex-col gap-4 w-full"
          : "flex justify-end flex-col gap-4 w-full text-end"
      }
    >
      {user && (
        <div className="flex flex-col gap-2">
          <h3 className="text-md">
            {i18n.language === "en" ? "Write Comment" : "اكتب تعليق"}
          </h3>
          <form
            onSubmit={handleSubmitComment}
            className="flex flex-col sm:flex-row gap-2"
          >
            <textarea
              type="text"
              required
              onChange={e => setComment(e.target.value)}
              className="border-2 border-gray-400 rounded-md w-full"
            />
            <button className="bg-[#2e9175] text-white rounded p-2 w-full sm:w-60">
              {i18n.language === "en" ? "Comment" : "علّق"}
            </button>
          </form>
        </div>
      )}
      <div
        className={
          i18n.language === "en"
            ? "flex flex-col gap-10 w-full"
            : "flex items-end flex-col gap-10 w-full text-end"
        }
      >
        <h3 className="flex flex-col gap-4 font-semibold w-full">
          {commentsData.length}{" "}
          {i18n.language === "en" ? "Comments" : "التعليقات"} <hr />
        </h3>
        <div className="w-full sm:w-96">
          {commentsData.length > 0 ? (
            commentsData.map(c => (
              <div
                className={
                  i18n.language === "en"
                    ? "flex flex-col flex-wrap gap-2 rounded-lg p-2 w-full"
                    : "flex flex-col flex-wrap gap-2 rounded-lg p-2 w-full text-end"
                }
                key={c._id}
              >
                <div
                  className={
                    i18n.language === "en"
                      ? "flex items-start justify-start gap-6"
                      : "flex flex-row-reverse items-start justify-start gap-6"
                  }
                >
                  <img
                    src="/download.jpg"
                    alt="user profile"
                    className="rounded-full w-12 h-12"
                  />
                  <div
                    className={
                      i18n.language === "en"
                        ? "flex justify-between items-start gap-2 p-2 shadow-md w-full"
                        : "flex flex-row-reverse justify-between items-start gap-2 p-2 shadow-md w-full"
                    }
                  >
                    <div>
                      <h4 className="text-lg">
                        {c.firstName + " " + c.lastName}
                      </h4>
                      <h4 className="text-[#ccc] text-sm">
                        {moment(c.createdAt).utc().format("YYYY-MM-DD")}
                      </h4>
                      <p className="text-gray-600 font-semibold text-sm">
                        {c.message}
                      </p>
                    </div>
                    {user && userDecoded.id === c.idUser && (
                      <button
                        className="text-sm bg-black p-1 text-white rounded text-xs"
                        onClick={() => handleDeletComment(c._id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="w-full">
              {i18n.language === "en" ? "Not Comments exist" : "لايوجد تعليقات"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
