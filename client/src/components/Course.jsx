import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {useTranslation} from "react-i18next";

const Course = ({c}) => {
  const [t, i18n] = useTranslation();
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <Link
      key={c._id}
      to={`/courses/${c._id}`}
      variants={item}
      className="item flex flex-col items-center justify-between hover:text-black  transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px] bg-[#fd5308] rounded-t-full pt-4   cursor-pointer hover:translate-y-[-10px] sm:mb-10"
    >
      <LazyLoadImage
        effect="blur"
        loading="lazy"
        src={c.thum}
        className="w-40 sm:w-60 rounded-t-full h-[100px] sm:h-[200px] px-4 bg-[#fd5308]"
        alt="Islamic-Studies"
      />
      <h3 className="text-xs sm:text-sm  bg-[#3cc4ad] text-white w-full  sm:h-10 text-lg">
        {i18n.language === "en" ? c.title : c.titleAr}
      </h3>
    </Link>
  );
};

export default Course;
