import React from 'react';
import Details from './Details';
import Todo from './Todo';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    // for creating navbar
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg" id="my-navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Habit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* two list for linkng to detILA PAGE AND HOME PAGE */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link fs-5" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/Details">Details</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/Details" element={<Details />} />
          <Route path="/home" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
