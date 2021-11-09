import axios from "axios";

const API_URL = "http://localhost:3000/course/";

export function getClassesFromAPI() {
  return axios.get(API_URL);
}

export function createClass({ name, details, briefName }) {
  return axios.post(API_URL, { name, details, briefName });
}
