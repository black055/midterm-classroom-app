import React from "react";
import LeftComp from "./LeftComp";
import MidComp from "./MidComp";
import NavBar from "../../NavBar";
import UserButton from "../../UserButton";

export default function CourseDetailNavBar({ courseName }) {
  return <NavBar leftComp={() => <LeftComp courseName={courseName} />} midComp={MidComp} rightComp={UserButton} />;
}
