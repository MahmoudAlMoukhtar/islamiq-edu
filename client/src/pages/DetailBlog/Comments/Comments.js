import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
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
  // console.log(userDecoded); //const dispatch = useDispatch();
  // console.log(post); //const dispatch = useDispatch();

  useEffect(() => {
    const makeRequest = async () => {
      const res = await api.fetchComments();
      const filterComments = res.data.filter(c => c.idParent === post._id);
      setCommentsData(filterComments);
      //console.log(filterComments);
    };
    makeRequest();
  }, []);
  const handleSubmitComment = async e => {
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
    <div className="flex flex-col gap-4 w-full">
      {user && (
        <div className="flex flex-col gap-2">
          <h3 className="text-md">
            {i18n.language === "en" ? "Write Comment" : "اكتب تعليق"}
          </h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <textarea
              type="text"
              onChange={e => setComment(e.target.value)}
              className="border-2 border-gray-400 rounded-md w-full"
            />
            <button
              onClick={handleSubmitComment}
              className="bg-[#4caf50] text-white rounded p-2 w-full sm:w-60"
            >
              {i18n.language === "en" ? "Comment" : "علّق"}
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-10 w-full">
        <h3 className="flex flex-col gap-4 font-semibold">
          {commentsData.length} Comments <hr />
        </h3>
        <div className="w-full sm:w-96">
          {commentsData.length > 0 ? (
            commentsData.map(c => (
              <div
                className="flex flex-col flex-wrap gap-2 rounded-lg p-2 w-full"
                key={c._id}
              >
                <div className="flex items-start justify-start gap-6">
                  <img
                    src="/download.jpg"
                    alt="user profile"
                    className="rounded-full w-12 h-12"
                  />
                  <div className="flex justify-between items-start gap-2 p-2 shadow-md w-full">
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
            <p>Not Comments exist</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
