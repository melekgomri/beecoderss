import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const CourseList = ({ courses, onUpdate, onDelete }) => {
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.title} - ${course.price}
            {/* Directly use the Link component without wrapping a button */}
            <Link to={`/edit-course/${course._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => onDelete(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
