import React from 'react';
import login from "../../assets/login.jpeg";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      // Call authentication function here
      // Example:
      // const response = await authenticateUser(data.email, data.password);
      // if (response.success) {
      //   navigate('/dashboard');
      // } else {
      //   // Handle authentication error
      // }
      navigate('*');
    } catch (error) {
      console.log(error);
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
            <label htmlFor="email">Email:</label><br />
            <input
              className="login-email"
              type="email"
              id="email"
              name="email"
              {...register('email')}
              required
            />
            {errors.email && <div className="login-error-message">{errors.email.message}</div>}
            <label htmlFor="password">Password:</label><br />
            <input
              className="login-password"
              type="password"
              id="password"
              name="password"
              {...register('password')}
              required
            /><br />
            {errors.password && <div className="login-error-message">{errors.password.message}</div>}
            <button className="login-submit-btn" type="submit">Login</button><br />
            <a style={{ margin: "20px", cursor: "pointer" }}>Forgot password?</a>
            <a href="/registration" style={{ marginLeft: "20px", cursor: "pointer" }}>Admin login</a>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Login;
