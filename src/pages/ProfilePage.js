import React from "react";
import { Route, Routes } from "react-router";
import CourseHomeNavBar from "../components/CourseHome/CourseHomeNavBar";
import ChangePassWord from "../components/profile/ChangePassWord";
import Profile from "../components/profile/Profile";
function ProfilePage() {
  return (
    <>
      <CourseHomeNavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/password" element={<ChangePassWord />} />
      </Routes>
    </>
  );
}

export default ProfilePage;
