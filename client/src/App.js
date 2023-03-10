import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import Footer from "./common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NavbarModal from "./common/NavModal";
import Navbar from "./common/Navbar";
import Auth from "./pages/Auth/index";
import PrivaitRoute from "./components/PrivaitRoute";
import Spinner from "./Spinner";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProductsAction} from "./redux/actions/productsActions";
import {fetchAllProductsCartAction} from "./redux/actions/cart";
import {ToastContainer} from "react-toastify";
import TopBar from "./common/TopBar";
import {Fab} from "@mui/material";
import {BsChatDotsFill, BsTelegram, BsWhatsapp} from "react-icons/bs";
import DetailCourse from "./pages/DetailCourse/DetailCourse";
import DetailBlog from "./pages/DetailBlog/DetailBlog";
export default function App() {
  const [navBarModal, setNavBarModal] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, []);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAllProductsAction());
  // }, []);

  if (loading) return <Spinner />;

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="flex flex-col justify-between items-center w-full h-full relative">
        <TopBar />
        <Navbar setNavBarModal={setNavBarModal} navbarModal={navBarModal} />
        <NavbarModal
          setNavBarModal={setNavBarModal}
          navbarModal={navBarModal}
        />
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
                Comming soon...
              </h1>
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/courses/:id" element={<DetailCourse />} />
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
                  <a href="https://t.me/+963936464820" target="blank">
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
          <Fab
            variant="extended"
            aria-label="add"
            style={{
              backgroundColor: "#FF932D",
              width: "70px",
              height: "70px",
              borderRadius: "100%",
            }}
            onClick={() => setShow(!show)}
          >
            <BsChatDotsFill size={30} />
          </Fab>
        </div>
      </div>
    </React.Fragment>
  );
}

/* 
<Route path="/products" element={<Menu />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route
            path="/contact"
            element={<ContactPage setNavBarModal={setNavBarModal} />}
          />
          <Route
            path="/cart"
            element={
              <PrivaitRoute>
                <CartPage />
              </PrivaitRoute>
            }
          />
*/

// <Route
//   path="/blogs/:id"
//   element={<DetailBlog setNavBarModal={setNavBarModal} />}
// />

// <Route path="/checkout" element={<Pay />} />
// <Route path="/locations" element={<Locations />} />
