import React from 'react';
import login from "../../assets/login.jpeg";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    Password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      // Send login request using Axios
      // console.log("data", data)
      const response = await axios.post('http://localhost:3000/api/employee/login', data);
      console.log(response);
      // Check if login was successful
      if (response.data.success) {
        // Store token and user data in local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        console.log("data", data)
        // Redirect user to dashboard or appropriate route
        navigate('*');
      } else {
        console.log('error')
        // Handle unsuccessful login
        console.log("Login failed: ", response.data.message);
        // Display appropriate error message to the user
      }
    } catch (error) {
      // console.log('in error')
      console.error("An error occurred during login:", error);
      // Handle any other errors that may occur during the login process
    }
  };

  return (
    <body>
      <div className="login-container">
        <div className="login-image">
          <img src={login} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="login-form-container">
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Email">Email:</label><br />
            <input
              className="login-email"
              type="Email"
              id="Email"
              name="Email"
              {...register('Email')}
              required
            />
            {errors.email && <div className="login-error-message">{errors.email.message}</div>}
            <label htmlFor="Password">Password:</label><br />
            <input
              className="login-Password"
              type="Password"
              id="Password"
              name="Password"
              {...register('Password')}
              required
            /><br />
            {errors.Password && <div className="login-error-message">{errors.Password.message}</div>}
            <button className="login-submit-btn" type="submit">Login</button><br />
            <a style={{ margin: "20px", cursor: "pointer" }}>Forgot Password?</a>
            <a href="/registration" style={{ marginLeft: "20px", cursor: "pointer" }}>Admin login</a>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Login;
