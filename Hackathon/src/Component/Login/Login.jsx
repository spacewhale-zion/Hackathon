// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the login request starts
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      // Save token in local storage or state management
      localStorage.setItem('token', response.data.token);
      navigate("/home");
    } catch (error) {
      console.error('Error logging in', error);
      alert('Invalid credentials');
    } finally {
      setLoading(false); // Set loading to false when the request is finished
    }
  };

  return (
    <div className="LogBefore">
      <form onSubmit={handleLogin} className="Login-form">
        <h2>Login</h2>
        <div className="mb-3">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
        </button>
        <br />
        <a href="/signup"><u>Sign Up</u></a>
      </form>
    </div>
  );
};

export default Login;
