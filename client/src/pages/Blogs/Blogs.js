import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import * as api from "../../api/index";
import Spinner from "../../Spinner";

const BlogItem = ({b}) => {
  return (
    <Link
      to={`/blogs/${b._id}`}
      className="flex flex-col items-start justify-between gap-10 mb-4 w-80 sm:w-96 rounded shadow-xl text-start  sm:h-[550px] hover:scale-[1.02] transtion duration-200"
    >
      <LazyLoadImage
        effect="blur"
        loading="lazy"
        src={b.image}
        className="w-80 sm:w-96 h-[250px] rounded-t-md"
      />
      <div className="flex flex-col justify-end items-start gap-10 text-start h-full w-full">
        <p className="text-2xl font-semibold  px-4">{b.title}</p>
        <p className="w-full  px-4">
          {b.message.substr(0, 200)}
          <span className="mx-1 opacity-[0.6] text-3xl">.....</span>
        </p>
        <button className="rounded bg-[#FF932D] py-2 px-4 w-full font-bold">
          See more
        </button>
      </div>
    </Link>
  );
};

const BlogsPage = () => {
  const [t, i18n] = useTranslation();
  const [blogsData, setBlogsData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const makeRequest = async () => {
      const res = await api.fetchPosts();
      setBlogsData(res.data);
      setLoading(false);
    };
    makeRequest();
  }, []);
  if (loading) return <Spinner />;
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.7}}
      id="blogs"
      className="flex flex-col  justify-center items-center gap-10 py-10 bg-[#f2ede7] w-full my-10"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-center">
          {t("titleblogsPage")}
        </h2>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <div className="flex gap-20 sm:gap-4 justify-center items-center flex-wrap w-full px-2 sm:px-4 sm:px-20 ">
        {blogsData.map(b => (
          <BlogItem b={b} />
        ))}
      </div>
    </motion.section>
  );
};

export default BlogsPage;
