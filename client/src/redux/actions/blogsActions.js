import * as api from "../../api/index";
import {
  FETCH_BLOGS,
  FETCH_BLOG_BY_ID,
  LOADING_BLOGS,
} from "../constants/constants";

export const fetchAllBlogsActions = () => async dispatch => {
  try {
    const {data} = await api.fetchPosts();
    console.log(data);
    dispatch({type: FETCH_BLOGS, payload: data});
    dispatch({type: LOADING_BLOGS, payload: false});
  } catch (err) {
    console.log("Error in action fetchProducts");
  }
};

export const fetchBlogByIdAction = id => async dispatch => {
  try {
    dispatch({type: "LOADING_BLOG", payload: true});
    const {data} = await api.fetchPostById(id);
    dispatch({type: FETCH_BLOG_BY_ID, payload: data});
    dispatch({type: "LOADING_BLOG", payload: false});
  } catch (err) {
    console.log("Error in action fetchProductByIdAction");
  }
};
