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
import {toast, ToastContainer} from "react-toastify";
import NavbarModal from "./components/NavModal";
import SectionCourse from "./pages/SectionCourse/SectionCourse";
function App() {
  const [theme, selectTheme] = useState("white");
  const [navbarModal, setNavBarModal] = useState(false);
  document.querySelector("body").style.backgroundColor =
    theme === "black" ? "#27272a" : "white";
  document.querySelector("body").style.color =
    theme === "black" ? "white" : "black";

  return (
    <Router>
      <Topbar
        theme={theme}
        selectTheme={selectTheme}
        navbarModal={navbarModal}
        setNavBarModal={setNavBarModal}
      />

      <div className=" flex justify-between w-full mt-10">
        {navbarModal && (
          <NavbarModal
            theme={theme}
            navbarModal={navbarModal}
            setNavBarModal={setNavBarModal}
          />
        )}
        <Sidebar
          theme={theme}
          selectTheme={selectTheme}
          navbarModal={navbarModal}
        />
        <Switch>
          <Route exact path="/admin">
            <Home theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/users" exact>
            <UserList theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/user/:userId">
            <User theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/newUser" exact>
            <NewUser theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/courses" exact>
            <CoursesList theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/comments" exact>
            <CommentsList theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/comments/:id" exact>
            <Comment theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/blogs" exact>
            <BlogsList theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/course/:id" exact>
            <Course theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/course/section/:idCourse/:idSection" exact>
            <SectionCourse theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/newcourse">
            <NewProduct theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/blog/:id">
            <Blog theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/newBlog">
            <NewBlog theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/testimonials" exact>
            <TestimonialsList theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/testimonials/:id">
            <Testimonial theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/contactMessage" exact>
            <ContactMessagesList theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/contactMessage/:id">
            <Message theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/admin/newsLetter">
            <NewNewsLetter theme={theme} selectTheme={selectTheme} />
          </Route>
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
/* <Route path="/oreders">
            <OrederList />
          </Route> */
