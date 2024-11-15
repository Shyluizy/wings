import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductManagement from './ProductManagement';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductManagement />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
