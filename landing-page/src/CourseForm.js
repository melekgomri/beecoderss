import React, { useState } from "react";

const CourseForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, price });
    setTitle("");
    setPrice("");
  };

  return (
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseForm;
