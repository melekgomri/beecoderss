import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import LandingPage from './LandingPage';
import AdminPage from './AdminPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Page d'accueil */}
        <Route path="/courses" element={<LandingPage />} /> {/* Page des cours */}
        <Route path="/admin" element={<AdminPage />} /> {/* Page d'administration */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// Si vous voulez mesurer les performances de l'application :
reportWebVitals();
