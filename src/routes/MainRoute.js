import React from "react";
import { Routes, Route } from "react-router-dom";
import CourseHome from "../pages/CourseHome";
import CourseDetail from "../pages/CourseDetail";
import ChangePassWord from "../components/profile/ChangePassWord";
import Profile from "../components/profile/Profile";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/password" element={<ChangePassWord />} />

      <Route path="/course/:id/*" element={<CourseDetail />} />
      <Route end path="/" element={<CourseHome />} />
    </Routes>
  );
}
