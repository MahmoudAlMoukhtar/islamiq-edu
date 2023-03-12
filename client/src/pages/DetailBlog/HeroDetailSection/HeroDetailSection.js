import React from "react";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {LazyLoadImage} from "react-lazy-load-image-component";

const HeroDetailSection = ({post}) => {
  return (
    <section className="relative">
      <LazyLoadImage
        effect="blur"
        src={post.image}
        alt="post"
        className="w-full relative brightness-[0.30]"
      />
      <div className="flex flex-col items-center gap-6 absolute  text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className=" text-center text-white text-3xl sm:text-5xl font-md">
          {post.title}
        </h3>
        <div className="flex justify-center items-center gap-2 text-sm">
          <img
            src="/download.jpg"
            alt="creator post"
            className="rounded-full w-8"
          />
          <div className="flex justify-center gap-2">
            <h6>By Admin {post.name}</h6>
            {" - "}
            <h6>{post.createdAt}</h6>
          </div>
        </div>
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
    </section>
  );
};
export default HeroDetailSection;
/* <h6>{moment(post.createdAt).fromNow()}</h6> */
