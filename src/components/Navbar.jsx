import { Link } from "react-router-dom";
import React from 'react';
import logo from "../assets/logo.png"; // Add logo in assets folder

// Navbar component for navigation links
const Navbar = () => {
  // Function to handle user logout
  const handleLogout = () => {
    // Logic for logging out the user
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="40" className="me-2" /> MixUp
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add-recipe">Add Recipe</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/saved-recipes">Saved Recipes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
