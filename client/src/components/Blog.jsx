import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogItem = ({b}) => {
  const [t, i18n] = useTranslation();
  return (
    <Link
      to={`/blogs/${b._id}`}
      className={
        i18n.language === "en"
          ? "flex flex-col items-start justify-between gap-10 mb-4 w-80 sm:w-96  rounded shadow-xl text-start  sm:h-[550px] hover:scale-[1.02] transtion duration-200"
          : "flex flex-col items-end justify-between gap-10 mb-4 w-80 sm:w-96  rounded shadow-xl text-end  sm:h-[550px] hover:scale-[1.02] transtion duration-200"
      }
    >
      <LazyLoadImage
        effect="blur"
        loading="lazy"
        src={b.image}
        className="w-80 sm:w-96 h-[250px] rounded-t-md"
      />
      <div
        className={
          i18n.language === "en"
            ? "flex flex-col justify-end items-start gap-10 text-start h-full w-full"
            : "flex flex-col justify-end items-end gap-10 text-end h-full w-full"
        }
      >
        <p className="text-xl lg:text-2xl font-semibold  px-4">
          {i18n.language === "en" ? b.title : b.titleAr}
        </p>
        <p className="w-full  px-4">
          {i18n.language === "en"
            ? b.message.substr(0, 200)
            : b.messageAr.substr(0, 200)}
          <span className="mx-1 opacity-[0.6] text-3xl">.....</span>
        </p>
        <button className="rounded bg-[#3cc4ad] py-2 px-4 w-full font-bold text-sm sm:text-md">
          {i18n.language === "en" ? "See more" : "رؤية المزيد"}
        </button>
      </div>
    </Link>
  );
};

export default BlogItem;
