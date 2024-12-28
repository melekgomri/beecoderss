// EditCourse.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseService from "./services/courseService"; // Correct path to your service

const EditCourse = () => {
  const { id } = useParams(); // Get course ID from the URL
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await courseService.getCourseById(id);
      if (course) {
        setTitle(course.title);
        setPrice(course.price);
      } else {
        console.error("Course not found");
      }
    };
    fetchCourse();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCourse = { title, price };
    await courseService.updateCourse(id, updatedCourse);
    navigate("/admin"); // Redirect after saving
  };

  return (
    <div>
      <h1>Edit Course</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Course Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          value={price}
          placeholder="Course Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCourse;
