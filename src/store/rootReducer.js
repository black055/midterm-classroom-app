import { combineReducers } from "redux";
import courses from "./reducers/courses";
import course from "./reducers/course";
import auth from "./reducers/auth";

export default combineReducers({ courses, course, auth });
