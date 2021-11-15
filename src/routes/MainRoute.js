import React from "react";
import { Route, Routes } from "react-router-dom";
import CourseDetail from "../pages/CourseDetail";
import CourseHome from "../pages/CourseHome";
import ProfilePage from "../pages/ProfilePage";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/user/*" element={<ProfilePage />} />
      <Route path="/course/:id/*" element={<CourseDetail />} />
      <Route end path="/" element={<CourseHome />} />
    </Routes>
  );
}
