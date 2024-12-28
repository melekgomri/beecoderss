import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LandingPage from './LandingPage';
import AdminPage from './AdminDashboard';
import reportWebVitals from './reportWebVitals';
import EditCourse from "./EditCourse";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Keep the Router only here */}
      <Routes>
        <Route path="/courses" element={<LandingPage />} /> {/* Page d'accueil */}
        <Route path="/courses" element={<LandingPage />} /> {/* Page des cours */}
        <Route path="/admin" element={<AdminPage />} /> {/* Page d'administration */}
        <Route path="/edit-course/:id" element={<EditCourse />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);

// Si vous voulez mesurer les performances de l'application :
reportWebVitals();
