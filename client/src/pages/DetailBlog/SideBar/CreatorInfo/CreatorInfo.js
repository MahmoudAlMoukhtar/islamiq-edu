import React from "react";
import {AiOutlineWhatsApp} from "react-icons/ai";

const CreatorInfo = ({post}) => {
  return (
    <div
      id="creator_post_info"
      className="flex flex-col gap-4 items-center justify-center text-center w-60"
    >
      <img
        src={post.userImage}
        alt="creator post"
        className="rounded-full w-24 h-24"
      />
      <h4 className="text-xl">{post.name}</h4>
      <p className="text-[#848d92]">
        {post.bio
          ? post.bio
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus."}
      </p>
      <a
        href="http://wa.me/+201012750418"
        target="blank"
        className="flex justify-center gap-2 items-center bg-[#4caf50] py-4 px-8 font-bold rounded w-full text-white"
      >
        <div>
          <AiOutlineWhatsApp size={25} />
        </div>
        Whatsapp
      </a>
    </div>
  );
};

export default CreatorInfo;
