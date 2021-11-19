import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UnexpectedComponent } from "../pages/404";
import CourseDetail from "../pages/CourseDetail";
import CourseHome from "../pages/CourseHome";
import Login from "../pages/Login";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/Register";
import { AuthRoute, PrivateRoute } from "./Routes";

export default function MainRoute() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <div>
      <Routes>
        <Route path="/register" element={<AuthRoute loggedIn={loggedIn} />}>
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/login" element={<AuthRoute loggedIn={loggedIn} />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/user" element={<PrivateRoute loggedIn={loggedIn} />}>
          <Route path="u/*" element={<ProfilePage />} />
        </Route>
        <Route path="/course" element={<PrivateRoute loggedIn={loggedIn} />}>
          <Route path=":id/*" element={<CourseDetail />} />
        </Route>
        <Route path="/" element={<PrivateRoute loggedIn={loggedIn} />}>
          <Route path="/" element={<CourseHome />} />
        </Route>
        <Route path="/404" element={<UnexpectedComponent />} />
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
