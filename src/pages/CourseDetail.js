import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseDetailNavBar from "../components/CourseDetail/CourseDetailNavBar/";
import { getOneCourse } from "../services/user";
import CourseInfo from "../components/CourseDetail/CourseInfo/";
import CoursePeople from "../components/CourseDetail/CoursePeople/";

export default function CourseDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.course.item);

  useEffect(() => {
    dispatch(async (dispatch) => {
      return getOneCourse(id).then((res) => {
        dispatch({ type: "COURSE_FETCHED", payload: res.data.payload });
      });
    });

    return () => {
      dispatch({ type: "COURSE_EMPTY" });
    };
  }, [dispatch, id]);

  return (
    <div>
      <CourseDetailNavBar courseName={name} />

      <Routes>
        <Route path="/*" element={<Navigate to="info" />} />
        <Route path="info" element={<CourseInfo />} />
        {/* <Route path="grades" /> */}
        <Route path="people" element={<CoursePeople />} />
      </Routes>
    </div>
  );
}
