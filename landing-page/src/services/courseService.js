import axios from "axios";

const API_URL = "http://localhost:5000/api";

const getCourses = async () => {
  const { data } = await axios.get(`${API_URL}/courses`);
  return data;
};

const createCourse = async (course) => {
  const { data } = await axios.post(`${API_URL}/courses`, course);
  return data;
};

const updateCourse = async (id, course) => {
  const { data } = await axios.put(`${API_URL}/courses/${id}`, course);
  return data;
};

const deleteCourse = async (id) => {
  await axios.delete(`${API_URL}/courses/${id}`);
};

export default { getCourses, createCourse, updateCourse, deleteCourse };
