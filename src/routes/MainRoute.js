import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CourseDetail from "../pages/CourseDetail";
import CourseHome from "../pages/CourseHome";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

export default function MainRoute() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  console.log(loggedIn);
  return (
    <div>
      <Routes>
        <Route path="/user/*" element={<ProfilePage />} />
        <Route path="/course/:id/*" element={<CourseDetail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route end path="/" element={<CourseHome />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        draggable
      />
    </div>
  );
}
