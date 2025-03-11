import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Register component for user registration
const Register = () => {
  const [email, setEmail] = useState(''); // State to hold the email input
  const [password, setPassword] = useState(''); // State to hold the password input
  const [confirmPassword, setConfirmPassword] = useState(''); // State to hold the confirm password input
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (password !== confirmPassword) {
      alert("Passwords do not match!"); // Notify user if passwords do not match
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      console.log('Registration response:', response);
      alert('Registration successful!'); // Notify user of successful registration
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.'); // Notify user of registration failure
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form className="w-50 mx-auto card p-4 shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state on input change
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register; // Export the Register component
