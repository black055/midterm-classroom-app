import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useParams, useNavigate } from "react-router-dom";
import CourseDetailNavBar from "../components/CourseDetail/CourseDetailNavBar/";
import { getOneCourse } from "../services/course";
import CourseInfo from "../components/CourseDetail/CourseInfo/";
import CoursePeople from "../components/CourseDetail/CoursePeople/";
import { toast } from "react-toastify";

export default function CourseDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useSelector((state) => state.course.item);

  useEffect(() => {
    dispatch(async (dispatch) => {
      return getOneCourse(id).then((res) => {
        if (res.status === 200) {
          dispatch({ type: "COURSE_FETCHED", payload: res.data.payload });
        }
        if (res.status === 202) {
          toast.warning(res.data.message);
        }
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
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path="info" element={<CourseInfo />} />
        {/* <Route path="grades" /> */}
        <Route path="people" element={<CoursePeople />} />
      </Routes>
    </div>
  );
}
