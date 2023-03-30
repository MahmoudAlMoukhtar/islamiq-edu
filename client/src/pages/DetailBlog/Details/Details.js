import React from "react";
import {useTranslation} from "react-i18next";
import moment from "moment";
import Comments from "../Comments/Comments";

const Details = ({post}) => {
  const [t, i18n] = useTranslation();
  return (
    <div
      className={
        i18n.language === "en"
          ? "flex flex-col gap-4 w-full"
          : "flex flex-col items-end gap-4 w-full"
      }
    >
      <div
        className={
          i18n.language === "en"
            ? "flex justify-start items-center gap-4 text-[#848d92]"
            : "flex flex-row-reverse justify-start items-center gap-4 text-[#848d92]"
        }
      >
        <img
          src="/download.jpg"
          className="rounded-full w-10 h-10"
          alt="creator post"
        />
        <div
          className={
            i18n.language === "en"
              ? "flex items-center gap-2"
              : "flex flex-row-reverse items-center gap-2"
          }
        >
          <h1 className="text-sm">
            <h6>{i18n.language === "en" ? "By Admin" : "بواسطة الآدمن"}</h6>
          </h1>
          -
          <p className="text-xs">
            {moment(post.createdAt).utc().format("YYYY-MM-DD")}
          </p>
        </div>
      </div>
      <p
        className={
          i18n.language === "en" ? "text-[#848d92]" : "text-[#848d92] text-end"
        }
      >
        {i18n.language === "en" ? post.message : post.messageAr}
      </p>
      <Comments post={post} />
    </div>
  );
};

export default Details;
