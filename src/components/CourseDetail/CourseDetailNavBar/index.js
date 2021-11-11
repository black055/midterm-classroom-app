import React from "react";
import LeftComp from "./LeftComp";
import MidComp from "./MidComp";
import RightComp from "./RightComp";
import NavBar from "../../NavBar";

export default function CourseDetailNavBar({ courseName }) {
  return <NavBar leftComp={() => <LeftComp courseName={courseName} />} midComp={MidComp} rightComp={RightComp} />;
}
