import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseDetail from "../pages/CourseDetail";
import CourseHome from "../pages/CourseHome";
import ProfilePage from "../pages/ProfilePage";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";
import StudentConfirmPage from "../pages/StudentConfirmPage";
import TeacherConfirmPage from "../pages/TeacherConfirmPage";
import { AuthRoute, PrivateRoute } from "./Routes";
import { UnexpectedComponent } from "../pages/404";

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
        <Route path="/invite" element={<PrivateRoute loggedIn={loggedIn} />}>
          <Route path="student/:id" element={<StudentConfirmPage />} />
          <Route path="teacher/:id" element={<TeacherConfirmPage />} />
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
