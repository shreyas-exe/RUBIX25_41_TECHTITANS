import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import HomePage from './homepage';
import SignInPage from './signin'; // Import SignInPage component
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is outside of Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage route */}
        <Route path="/signin" element={<SignInPage />} /> {/* SignInPage route */}
        <Route exact path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
