import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import CartPage from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct/index";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import Footer from "./common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NavbarModal from "./common/NavModal";
import Navbar from "./common/Navbar";
import Auth from "./pages/Auth/index";
import AboutPage from "./pages/About Us";
import PrivaitRoute from "./components/PrivaitRoute";
import Spinner from "./Spinner";
import Menu from "./pages/Menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProductsAction} from "./redux/actions/productsActions";
import {fetchAllProductsCartAction} from "./redux/actions/cart";
import {ToastContainer} from "react-toastify";
import TopBar from "./common/TopBar";

export default function App() {
  const [navBarModal, setNavBarModal] = useState(false);
  const {loading} = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAction());
    dispatch(fetchAllProductsCartAction());
  }, []);

  if (loading) return <Spinner />;

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="flex flex-col justify-between items-center w-full h-full">
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
        </Routes>
        <Footer />
        <ToastContainer theme="dark" />
      </div>
    </React.Fragment>
  );
}

/* 
<Route path="/products" element={<Menu />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/auth" element={<Auth />} />
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
