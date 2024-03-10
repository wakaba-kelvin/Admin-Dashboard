import React, { useState } from 'react';
import './Login.scss'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your validation logic goes here
    // For simplicity, let's just check if both fields are filled
    if (formData.username === '' || formData.password === '') {
      alert('Please enter both username and password');
      return;
    }

    // If all validation passes, you can proceed with the login logic here
    // For now, let's just log the values to the console
    console.log('Username:', formData.username);
    console.log('Password:', formData.password);

    // You can add your login logic here, such as making an API request

    // Optionally, you can reset the form after submission
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div className='admin-dashboard'>
        <div className="login">
            <div className="image">
                <h2>Premiernets</h2>
            </div>
            <div className="content">
                <div className="header">
                <h2>Admin</h2>
                <h2>Portal</h2>
      </div>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Login</button>
      </form>
      </div> 
      </div>
    </div>
    </div>

  );
};

export default LoginForm;
