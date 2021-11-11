import { COURSE_EMPTY, COURSE_FETCHED } from "../types";

const initialState = { item: {} };

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COURSE_EMPTY:
      return {
        ...state,
        item: {},
      };
    case COURSE_FETCHED:
      return {
        ...state,
        item: payload,
      };
    default:
      return state;
  }
}
