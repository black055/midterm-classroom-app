import { combineReducers } from "redux";
import courses from "./reducers/courses";
import course from "./reducers/course";

export default combineReducers({ courses, course });
