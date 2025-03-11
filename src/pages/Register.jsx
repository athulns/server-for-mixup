import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Register component for user registration
const Register = () => {
  const [username, setUsername] = useState(''); // State to hold the username input
  const [email, setEmail] = useState(''); // State to hold the email input
  const [password, setPassword] = useState(''); // State to hold the password input
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('https://backend-2-qmay.onrender.com/api/auth/register', {
        username: username,
        email: email,
        password: password
      });
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
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state on input change
            required
          />
        </div>
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
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register; // Export the Register component
