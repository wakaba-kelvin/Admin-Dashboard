import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.scss'; 
import login from "../../assets/login.jpeg";
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../Feature/Employee/Employee'; // Update the path

function LoginForm() {
  const navigate = useNavigate();
  const [loginMutation, { isLoading, isError }] = useLoginMutation(); // Use login mutation hook

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await loginMutation(values); // Call login mutation
        const { data, error } = response;

        if (data) {
          const { token, user } = data;
          localStorage.setItem('token', token); // Store token in local storage
          localStorage.setItem('user', JSON.stringify(user)); // Store user information in local storage
          resetForm(); // Reset form fields
          navigate('/dashboard'); // Navigate to dashboard
        } else if (error) {
          console.error('Login failed:', error);
          // Handle error (e.g., display error message)
        }
      } catch (error) {
        console.error('Login failed:', error);
        // Handle error (e.g., display error message)
      }
    }
  });

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={login} alt="" />
      </div>
      <div className="login-form-container">
        <h2>Login to your account</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email:</label><br />
          <input
            className="Email"
            type="Email"
            id="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="login-error-message">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">Password:</label><br />
          <input
            className="password"
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          /><br />
          {formik.touched.password && formik.errors.password ? (
            <div className="login-error-message">{formik.errors.password}</div>
          ) : null}
          <button className="login-btn" type="submit">Login</button><br />
          <a className="login-forgot-password">Forgot password</a>
          <a href="/registration" className="login-create-account">Create Account</a>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
