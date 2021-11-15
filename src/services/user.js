import axios from "axios";

const API_URL = "http://localhost:3000/course/";

export function getCourses() {
  return axios.get(API_URL);
}

export function getOneCourse(id) {
  return axios.get(API_URL + "/" + id);
}

export function createCourse(name, details, briefName) {
  return axios.post(API_URL, { name, details, briefName });
}

export function joinCourse(code) {
  return axios.post(API_URL + "join?code=" + code);
}
