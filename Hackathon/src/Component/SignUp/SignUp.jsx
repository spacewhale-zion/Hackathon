// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file

const SignUp = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('');
  const [areaOfStudy, setAreaOfStudy] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the registration request starts
    try {
      // Sending the registration request
      const response = await axios.post('http://localhost:5000/api/auth/signup', { 
        name, 
        email, 
        password, 
        university, 
        areaOfStudy 
      });
      
      // Assuming the response contains the token
      const { token } = response.data; // Adjust this if your response structure is different
      
      // Save the token to localStorage
      localStorage.setItem('auth-token', token);

      // Navigate to the login page after successful registration
      navigate('/Login');
   
    } catch (error) {
      console.error('Error registering', error);
      alert('Registration failed. Please try again.'); // Inform the user about the error
    } finally {
      setLoading(false); // Set loading to false when the request is finished
    }
  };

  return (
    <div className="SignUp-container">
      <form onSubmit={handleRegister} className="SignUp-form">
        <h2 className="SignUp-title">Register</h2>
        <div className="SignUp-mb-3">
          <label className="SignUp-label">Name</label>
          <input type="text" className="SignUp-form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="SignUp-mb-3">
          <label className="SignUp-label">Email</label>
          <input type="email" className="SignUp-form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="SignUp-mb-3">
          <label className="SignUp-label">Password</label>
          <input type="password" className="SignUp-form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="SignUp-mb-3">
          <label className="SignUp-label">University</label>
          <input type="text" className="SignUp-form-control" value={university} onChange={(e) => setUniversity(e.target.value)} required />
        </div>
        <div className="SignUp-mb-3">
          <label className="SignUp-label">Area of Study</label>
          <input type="text" className="SignUp-form-control" value={areaOfStudy} onChange={(e) => setAreaOfStudy(e.target.value)} required />
        </div>
        <button type="submit" className="SignUp-btn" disabled={loading}>
          {loading ? 'Registering...' : 'Register'} {/* Show loading text */}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
