import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Platform</h1>
        <p>Your one-stop solution for learning and growth!</p>
        <div className="buttons">
  <Link to="/admin" className="btn-primary">Go to Admin Panel</Link>
  <Link to="/courses" className="btn-secondary">Explore Courses</Link>
</div>
      </header>
      <section id="courses" className="App-courses">
        <h2>Featured Courses</h2>
        <div className="course-grid">
          <div className="course-card">
            <h3>Web Development</h3>
            <p>Learn the latest in web development with hands-on projects.</p>
          </div>
          <div className="course-card">
            <h3>Data Science</h3>
            <p>Master data analysis and machine learning techniques.</p>
          </div>
          <div className="course-card">
            <h3>UI/UX Design</h3>
            <p>Build beautiful and user-friendly designs.</p>
          </div>
        </div>
      </section>
      <footer className="App-footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
