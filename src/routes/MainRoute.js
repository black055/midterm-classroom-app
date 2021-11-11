import React from "react";
import { Routes, Route } from "react-router-dom";
import CourseHome from "../pages/CourseHome";
import CourseDetail from "../pages/CourseDetail";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/course/:id/*" element={<CourseDetail />} />
      <Route end path="/" element={<CourseHome />} />
    </Routes>
  );
}
