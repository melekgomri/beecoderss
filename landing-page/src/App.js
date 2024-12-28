import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AdminDashboard from './AdminDashboard';

const App = () => {
  return (
    <Routes> {/* Use Routes here for app-level routing */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
