import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import Footer from "./common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NavbarModal from "./common/NavModal";
import Navbar from "./common/Navbar";
import Auth from "./pages/Auth/index";
import PrivaitRoute from "./components/PrivaitRoute";
import {ToastContainer} from "react-toastify";
import TopBar from "./common/TopBar";
import {Fab} from "@mui/material";
import {BsTelegram, BsWhatsapp} from "react-icons/bs";
import DetailCourse from "./pages/DetailCourse/DetailCourse";
import DetailBlog from "./pages/DetailBlog/DetailBlog";
import {motion} from "framer-motion";
import BlogsPage from "./pages/Blogs/Blogs";
import {useTranslation} from "react-i18next";
import ContactModal from "./common/ContactModal";

export default function App() {
  const [t, i18n] = useTranslation();
  const [contactModalShow, setContactModalShow] = useState(false);
  const [navBarModal, setNavBarModal] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <ScrollToTop />
      <div
        className={
          i18n.language === "en"
            ? "flex flex-col justify-between items-center  h-full relative w-full english"
            : "flex flex-col justify-between items-center  h-full relative w-full arabic"
        }
      >
        <Navbar setNavBarModal={setNavBarModal} navbarModal={navBarModal} />
        <TopBar setNavBarModal={setNavBarModal} navbarModal={navBarModal} />
        <NavbarModal
          setNavBarModal={setNavBarModal}
          navbarModal={navBarModal}
        />
        {contactModalShow && (
          <ContactModal
            setContactModalShow={setContactModalShow}
            contactModalShow={contactModalShow}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setNavBarModal={setNavBarModal}
                navbarModal={navBarModal}
              />
            }
          />
          <Route
            path="*"
            element={
              <h1 className="flex justify-center text-center w-full min-h-full text-6xl font-bold py-20">
                Not Found Page
              </h1>
            }
          />
          <Route
            path="/auth"
            element={
              <PrivaitRoute>
                <Auth />
              </PrivaitRoute>
            }
          />
          <Route
            path="/courses/:id"
            element={<DetailCourse setContactModalShow={setContactModalShow} />}
          />
          <Route path="/blogs" element={<BlogsPage />} exact />
          <Route path="/blogs/:id" element={<DetailBlog />} />
        </Routes>
        <Footer />
        <div className="fixed bottom-10 right-4 sm:right-10 z-40">
          {show && (
            <React.Fragment>
              <div className="translate-y-[-20px]">
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="add"
                  style={{width: "70px", height: "70px", borderRadius: "100%"}}
                >
                  <a href="https://t.me/+201028875241" target="blank">
                    <BsTelegram size={30} />
                  </a>
                </Fab>
              </div>
              <div className="translate-y-[-10px]">
                <Fab
                  variant="extended"
                  aria-label="add"
                  style={{
                    backgroundColor: "#4caf50",
                    color: "#fff",
                    width: "70px",
                    height: "70px",
                    borderRadius: "100%",
                  }}
                >
                  <a href="http://wa.me/+201012750418" target="blank">
                    <BsWhatsapp size={30} />
                  </a>
                </Fab>
              </div>
            </React.Fragment>
          )}
          <motion.div
            initial={{rotate: 360}}
            whileHover={{rotate: 360}}
            transition={{ease: "linear", duration: 1, repeat: Infinity}}
          >
            <Fab
              variant="extended"
              aria-label="add"
              style={{
                backgroundColor: "#fd5308",
                width: "70px",
                height: "70px",
                borderRadius: "100%",
              }}
              onClick={() => setShow(!show)}
            >
              <img src="/icons/47-chat-solid.gif" className="rounded-full" />
            </Fab>
          </motion.div>
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}
