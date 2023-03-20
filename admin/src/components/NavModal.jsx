import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";

const activeStyle = {
  color: "white",
  backgroundColor: "#4caf50",
  padding: "20px 12px",
  fontWeight: "bold",
  borderLeft: "8px solid #FF932D",
};
const styles = {
  linkPages:
    "text-[#000] hover:text-white hover:text-white hover:bg-[#4caf50] py-6 px-2 font-semibold w-full hover:border-l-8 hover:border-[#FF932D] hover:font-bold w-full transtion duration-200",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({setNavBarModal, navbarModal, theme}) => {
  return (
    <div
      id="modal-nav"
      className={navbarModal ? styles.navBarModal : styles.navBarModalHidden}
    >
      <div
        onClick={() => setNavBarModal(false)}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        className="bg-white flex flex-col gap-y-4 fixed z-10 top-0 left-0 border w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
      >
        <div id="header-cart" className="my-2 w-100">
          <button
            onClick={() => setNavBarModal(false)}
            className="font-bold ml-4"
          >
            X
          </button>
        </div>
        <div
          className={
            theme === "black" ? " bg-zinc-800 w-60 " : " bg-white w-60 "
          }
        >
          <div
            className={
              theme === "black"
                ? "sidebarWrapper bg-zinc-800"
                : "sidebarWrapper bg-white"
            }
          >
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <NavLink
                  to="/admin"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem active">Home</li>
                </NavLink>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <NavLink
                  to="/admin/users"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem">Users</li>
                </NavLink>
                <NavLink
                  to="/admin/blogs"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem">Blogs</li>
                </NavLink>
                <NavLink
                  to="/admin/courses"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem">Courses</li>
                </NavLink>
                <NavLink
                  to="/admin/comments"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem">Comments</li>
                </NavLink>
                <NavLink
                  to="/admin/contactMessage"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem">Contact Messages</li>
                </NavLink>

                <NavLink
                  to="/admin/testimonials"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem">Testimonials</li>
                </NavLink>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Add New</h3>
              <ul className="sidebarList">
                <NavLink
                  to="/admin/newcourse"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem">New Course</li>
                </NavLink>
                <NavLink
                  to="/admin/newBlog"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem">New Blog</li>
                </NavLink>
                <NavLink
                  to="/admin/newsLetter"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem">New NewsLetter</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarModal;

/* 

*/
