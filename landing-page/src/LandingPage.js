import React, { useEffect, useState } from 'react';
import axios from 'axios';


const LandingPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Platform</h1>
        <p>Explore our range of courses and learn something new today!</p>
      </header>
      <section className="courses-section">
        <h2>Our Courses</h2>
        <div className="courses-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>${course.price}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">© 2024 Your Platform Name</footer>
    </div>
  );
};

export default LandingPage;
