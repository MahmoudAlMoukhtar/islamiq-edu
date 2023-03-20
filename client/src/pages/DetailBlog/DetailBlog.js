import React, {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import Spinner from "../../Spinner";
import {useDispatch, useSelector} from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import HeroDetailSection from "./HeroDetailSection/HeroDetailSection";
import Details from "./Details/Details";
import {fetchBlogByIdAction} from "../../redux/actions/blogsActions";

const DetailBlog = () => {
  //react router
  const {id} = useParams();
  const navigate = useNavigate();
  const {loadingBlog, blog} = useSelector(state => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogByIdAction(id));
  }, []);

  //return jsx UI product
  if (loadingBlog) return <Spinner />;
  return (
    <div className="flex flex-col sm:px-10 md:px-20 w-full">
      <HeroDetailSection post={blog} />
      <section className="bg-white flex flex-wrap items-center md:items-start md:flex-nowrap  lg:flex-row  justify-center gap-4 p-4 w-full">
        <Details post={blog} />
      </section>
    </div>
  );
};
export default DetailBlog;
