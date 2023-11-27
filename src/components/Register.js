import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Simulate user registration by posting data to a local "server" (json-server)
      const response = await axios.post('http://localhost:8080/users', {
        username,
        password,
      });

      if (response.data) {
        // Registration successful
        alert('Registration successful! You can now log in.');
        navigate('/login');
      } else {
        // Registration failed
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      // Handle axios error
      console.error('Registration failed:', error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className='login'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        Already have an account? <Link to="/login">Login here.</Link>
      </div>
    </div>
  );
};

export default Register;
