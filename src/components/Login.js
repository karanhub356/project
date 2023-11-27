import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const API_BASE_URL = 'http://localhost:8080'; // Assuming your React app is running on port 3000

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Simulate fetching user data from the server
      const response = await axios.get(`${API_BASE_URL}/users?username=${username}&password=${password}`);

      const user = response.data[0]; // Assuming the response is an array

      if (user) {
        // Successful login
        alert('Login successful!');
        navigate('/');
        // Additional logic to set user authentication status or redirect
      } else {
        // Unsuccessful login, suggest registration
        alert('Login failed. Please register first.');
        // Additional logic to navigate to the registration page
        navigate('/register');
      }
    } catch (error) {
      // Handle login error, e.g., display an error message
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className='textinput'>
        Don't have an account? <Link to="/register">Register Now</Link>
      </div>
    </div>
  );
};

export default Login;
