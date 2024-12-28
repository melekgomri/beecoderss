import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import courseService from "./services/courseService";

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const data = await courseService.getCourses();
    setCourses(data);
  };

  const addCourse = async (course) => {
    const newCourse = await courseService.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const updateCourse = async (id, updatedCourse) => {
    const course = await courseService.updateCourse(id, updatedCourse);
    setCourses(courses.map((c) => (c._id === id ? course : c)));
  };

  const deleteCourse = async (id) => {
    await courseService.deleteCourse(id);
    setCourses(courses.filter((c) => c._id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <CourseForm onSubmit={addCourse} />
      <CourseList
        courses={courses}
        onUpdate={updateCourse}
        onDelete={deleteCourse}
      />
    </div>
  );
};

export default AdminDashboard;
