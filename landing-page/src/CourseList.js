import React from "react";

const CourseList = ({ courses, onUpdate, onDelete }) => {
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.title} - ${course.price}
            <button onClick={() => onUpdate(course._id)}>Edit</button>
            <button onClick={() => onDelete(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
