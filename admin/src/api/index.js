import axios from "axios";

const API = axios.create({
  baseURL: "https://islamiq-edu-d114.vercel.app/api",
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
export const createPost = newPost => API.post("/blogs", newPost);
export const updatePost = (id, updates) => API.put(`/blogs/${id}`, updates);
export const deletePost = id => API.delete(`/blogs/${id}`);
export const fetchComments = () => API.get("/comments");
export const fetchCommentById = id => API.get(`/comments/${id}`);
export const deleteCommentById = id => API.delete(`/comments/${id}`);

//AUTH Operation
export const signin = formData => API.post("/user/signin", formData);
export const signup = formData => API.post("/user/signup", formData);
export const updateUser = (id, updates) => API.put(`/user/${id}`, updates);

//courses
export const fetchCourses = () => API.get("/courses");
export const fetchCourseById = id => API.get(`/courses/${id}`);
export const fetchSectionCourseById = (idCourse, idSection) =>
  API.get(`/courses/section/${idCourse}/${idSection}`);
export const updateSectionById = (idCourse, idSection, updates) =>
  API.patch(`/courses/section/${idCourse}/${idSection}`, updates);
export const deleteCourseById = id => API.delete(`/courses/${id}`);
export const createCourse = formData => API.post("/courses", formData);
export const addSection = (id, formData) =>
  API.post(`/courses/addsection/${id}`, formData);
export const updateCourse = (id, updates) => API.put(`/courses/${id}`, updates);
export const deleteSection = (id, idSection) =>
  API.patch(`/courses/sections/${id}`, {idSection: idSection});

//users
export const fetchAllUsers = () => API.get("/user");
export const fetchUserById = id => API.get(`/user/${id}`);
export const deleteUserById = id => API.delete(`/user/${id}`);
//testimonials
export const fetchAllTestimonials = () =>
  API.get("/testimoials/testminialsDashboard");
export const fetchTestimonialById = id =>
  API.get(`/testimoials/testminialsDashboard/${id}`);
export const updateTestimonial = (id, data) =>
  API.put(`/testimoials/${id}`, data);
export const deleteTestimonialById = id => API.delete(`/testimoials/${id}`);

//newsLetter
export const createNewsLetter = newsLetter =>
  API.post("/newsLetter", newsLetter);
//contactMessages
export const fetchContactMessages = () => API.get("/contactMessages");
export const fetchContactMessagesId = id => API.get(`/contactMessages/${id}`);
export const deleteContactMessagesById = id =>
  API.delete(`/contactMessages/${id}`);
