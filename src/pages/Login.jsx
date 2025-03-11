
import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { Link, useNavigate } from 'react-router-dom';


// Login component for user authentication
const Login = () => {
  const [email, setEmail] = useState(''); // State to hold the email input
  const [password, setPassword] = useState(''); // State to hold the password input
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('https://backend-2-qmay.onrender.com/api/auth/login', { email, password });
      console.log('Login response:', response);
      alert('Login successful!'); // Notify user of successful login
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.'); // Notify user of login failure
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
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
        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
      <p className="text-center mt-3">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login; // Export the Login component
