import { COURSE_EMPTY, COURSE_FETCHED, COURSE_UPDATE } from "../types";

const initialState = { item: {}, role: "" };

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COURSE_EMPTY:
      return {
        ...state,
        item: {},
        role: "",
      };
    case COURSE_FETCHED:
      // console.log(type);
      // console.log(payload.role);
      return {
        ...state,
        item: payload.course,
        role: payload.role,
      };
    case COURSE_UPDATE:
      return {
        ...state,
        item: payload.course,
        role: payload.role,
      };
    default:
      return state;
  }
}
