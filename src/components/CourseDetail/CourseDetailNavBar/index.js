import React from "react";
import NavBar from "../../NavBar";
import UserButton from "../../UserButton";
import LeftComp from "./LeftComp";
import MidComp from "./MidComp";

export default function CourseDetailNavBar({ courseName, role }) {
  // console.log(role);
  return (
    <NavBar
      leftComp={() => <LeftComp courseName={courseName} />}
      midComp={() => <MidComp role={role} />}
      rightComp={UserButton}
    />
  );
}
