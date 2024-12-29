import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./LandingPage.css";



const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Welcome to Course Platform</h1>
        <p>Your gateway to learning and teaching.</p>
        <Link to="/admin">
          <Button variant="contained" color="primary">
            Go to Admin Interface
          </Button>
        </Link>
      </header>
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">📚 Variety of Courses</div>
          <div className="feature-item">💡 Expert Instructors</div>
          <div className="feature-item">🌟 Quality Content</div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
