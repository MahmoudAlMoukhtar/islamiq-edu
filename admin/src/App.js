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
//import OrederList from "./pages/orederList/OrederList";
import "react-toastify/dist/ReactToastify.css";
import TestimonialsList from "./pages/orederList/TestimonialsList";
import Testimonial from "./pages/testimonial/Testimonial";

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
          <Route exact path="/">
            <Home theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/courses">
            <CoursesList />
          </Route>
          <Route path="/blogs">
            <BlogsList />
          </Route>
          <Route path="/course/:id">
            <Course />
          </Route>
          <Route path="/newcourse">
            <NewProduct />
          </Route>
          <Route path="/blog/:id">
            <Blog />
          </Route>
          <Route path="/newBlog">
            <NewBlog />
          </Route>
          <Route path="/testimonials" exact>
            <TestimonialsList />
          </Route>
          <Route path="/testimonials/:id">
            <Testimonial />
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
