import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import {useState} from "react";
import CoursesList from "./pages/coursesList/CoursesList";
import BlogsList from "./pages/BlogsList/BlogsList";
import NewBlog from "./pages/newBlog/NewBlog";
import Blog from "./pages/blog/Blog";
import Course from "./pages/course/Course";
import "react-toastify/dist/ReactToastify.css";
import TestimonialsList from "./pages/orederList/TestimonialsList";
import Testimonial from "./pages/testimonial/Testimonial";
import NewNewsLetter from "./pages/newsLetter/NewsLetter";
import CommentsList from "./pages/comments/CommentsList";
import Comment from "./pages/comment/Comment";
import ContactMessagesList from "./pages/contactMessages/ContactMessagesList";
import Message from "./pages/message/Message";

function App() {
  const [theme, selectTheme] = useState("white");
  document.querySelector("body").style.backgroundColor =
    theme === "black" ? "#27272a" : "white";
  document.querySelector("body").style.color =
    theme === "black" ? "white" : "black";
  return (
    <Router>
      <Topbar theme={theme} selectTheme={selectTheme} />
      <div className="container ">
        <Sidebar theme={theme} selectTheme={selectTheme} />
        <Switch>
          <Route exact path="/admin">
            <Home theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/users" exact>
            <UserList />
          </Route>
          <Route path="/admin/user/:userId">
            <User />
          </Route>
          <Route path="/admin/newUser" exact>
            <NewUser />
          </Route>
          <Route path="/admin/courses" exact>
            <CoursesList />
          </Route>
          <Route path="/admin/comments" exact>
            <CommentsList />
          </Route>
          <Route path="/admin/comments/:id" exact>
            <Comment />
          </Route>
          <Route path="/admin/blogs" exact>
            <BlogsList />
          </Route>
          <Route path="/admin/course/:id">
            <Course />
          </Route>
          <Route path="/admin/newcourse">
            <NewProduct />
          </Route>
          <Route path="/admin/blog/:id">
            <Blog />
          </Route>
          <Route path="/admin/newBlog">
            <NewBlog />
          </Route>
          <Route path="/admin/testimonials" exact>
            <TestimonialsList />
          </Route>
          <Route path="/admin/testimonials/:id">
            <Testimonial />
          </Route>
          <Route path="/admin/contactMessage" exact>
            <ContactMessagesList />
          </Route>
          <Route path="/admin/contactMessage/:id">
            <Message />
          </Route>
          <Route path="/admin/newsLetter">
            <NewNewsLetter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
/* <Route path="/oreders">
            <OrederList />
          </Route> */
