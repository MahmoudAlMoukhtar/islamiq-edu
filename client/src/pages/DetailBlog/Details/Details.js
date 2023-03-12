import React from "react";
//import moment from "moment";
import Comments from "../Comments/Comments";

const Details = ({post}) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-start items-center gap-4 text-[#848d92]">
        <img
          src="/download.jpg"
          className="rounded-full w-10 h-10"
          alt="creator post"
        />
        <h1 className="text-sm">
          By Admin <span className="font-semibold">{post.name}</span>
        </h1>
        <h1 className="text-xs">{post.createdAt}</h1>
      </div>
      <p className="text-[#848d92]">{post.message}</p>
      <Comments post={post} />
    </div>
  );
};

export default Details;
/* <Comments post={post} /> */
