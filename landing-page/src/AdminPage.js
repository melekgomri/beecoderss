import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', price: '', image: null });

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newCourse.title);
    formData.append('price', newCourse.price);
    formData.append('image', newCourse.image);

    const response = await axios.post('/api/courses', formData);
    setCourses([...courses, response.data]);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/courses/${id}`);
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newCourse.price}
          onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
        />
        <input
          type="file"
          onChange={(e) => setNewCourse({ ...newCourse, image: e.target.files[0] })}
        />
        <button type="submit">Add Course</button>
      </form>

      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <img src={course.image} alt={course.title} width="50" />
            {course.title} - ${course.price}
            <button onClick={() => handleDelete(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
