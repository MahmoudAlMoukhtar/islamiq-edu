import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api",
  //baseURL: "http://localhost:3001/api",
});
API.interceptors.request.use(req => {
  if (localStorage.getItem("userIqraa")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userIqraa")).token
    }`;
  }

  return req;
});
//CRUD POSTS
export const fetchPosts = () => API.get("/blogs");
export const fetchPostById = id => API.get(`/blogs/${id}`);

//AUTH Operation
export const signin = formData => API.post("/user/signin", formData);
export const signup = formData => API.post("/user/signup", formData);
export const updateProfile = (id, updates) =>
  API.put(`/user/updateProfile/${id}`, updates);

//courses
export const fetchProducts = () => API.get("/products");
export const fetchProductById = id => API.get(`/products/${id}`);
