import {
  FETCH_BLOGS,
  FETCH_BLOG_BY_ID,
  LOADING_BLOGS,
} from "../constants/constants";
const blogsReducer = (
  state = {loading: true, blogs: [], blog: {}, loadingBlog: true},
  action
) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {...state, blogs: action.payload};

    case FETCH_BLOG_BY_ID:
      //const blog = state.blogs.find(item => item._id === action.payload);
      return {...state, blog: action.payload};

    case LOADING_BLOGS:
      return {...state, loading: action.payload};
    case "LOADING_BLOG":
      return {...state, loadingBlog: action.payload};

    default:
      return state;
  }
};

export default blogsReducer;
