import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import CoursesList from "./pages/coursesList/CoursesList";
import BlogsList from "./pages/BlogsList/BlogsList";
import NewBlog from "./pages/newBlog/NewBlog";
import Blog from "./pages/blog/Blog";
import Course from "./pages/course/Course";
import TestimonialsList from "./pages/orederList/TestimonialsList";
import Testimonial from "./pages/testimonial/Testimonial";
import NewNewsLetter from "./pages/newsLetter/NewsLetter";
import CommentsList from "./pages/comments/CommentsList";
import Comment from "./pages/comment/Comment";
import ContactMessagesList from "./pages/contactMessages/ContactMessagesList";
import Message from "./pages/message/Message";
import NavbarModal from "./components/NavModal";
import SectionCourse from "./pages/SectionCourse/SectionCourse";
import Auth from "./pages/auth/Auth";
import PrivaitRoute from "./components/PrivaitRoute";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

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

        <Switch>
          <Route exact path="/admin">
            <PrivaitRoute>
              <Home theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/users" exact>
            <PrivaitRoute>
              <UserList theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/user/:userId">
            <PrivaitRoute>
              <User theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/newUser" exact>
            <PrivaitRoute>
              <NewUser theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/courses" exact>
            <PrivaitRoute>
              <CoursesList theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/comments" exact>
            <PrivaitRoute>
              <CommentsList theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/comments/:id" exact>
            <PrivaitRoute>
              <Comment theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/blogs" exact>
            <PrivaitRoute>
              <BlogsList theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/course/:id" exact>
            <PrivaitRoute>
              <Course theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/course/section/:idCourse/:idSection" exact>
            <PrivaitRoute>
              <SectionCourse theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/newcourse">
            <PrivaitRoute>
              <NewProduct theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/blog/:id">
            <PrivaitRoute>
              <Blog theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/newBlog">
            <PrivaitRoute>
              <NewBlog theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/testimonials" exact>
            <PrivaitRoute>
              <TestimonialsList theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/testimonials/:id">
            <PrivaitRoute>
              <Testimonial theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/contactMessage" exact>
            <PrivaitRoute>
              <ContactMessagesList theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/contactMessage/:id">
            <PrivaitRoute>
              <Message theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/newsLetter">
            <PrivaitRoute>
              <NewNewsLetter theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/auth">
            <Auth theme={theme} selectTheme={selectTheme} />
          </Route>
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

/* 
<Sidebar
          theme={theme}
          selectTheme={selectTheme}
          navbarModal={navbarModal}
        />
*/
