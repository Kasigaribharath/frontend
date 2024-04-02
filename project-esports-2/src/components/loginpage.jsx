import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import "./loginpage.css"


const LoginForm = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["sessionid", "username", "csrf", "message"]);

  const initialValues = {
    username: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores').required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setFieldError }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/login/', values);

      localStorage.setItem("token", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      setCookie("username", values.username); // Set the session ID as a cookie/ 
      setCookie("mpin", response.data.mpin); // Set the session ID as a cookie/ 
      navigate("/profile");
      window.scrollTo(0, 0);
      window.location.reload();
    } catch (error) {
      setFieldError('password', 'Invalid username or password');
    }
  };

  return (
    <div className="form-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="">
            <div className="login-container">
              <h1 className='text-center text-white'>User Login</h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-group">
                      <label className='h5 fw-bold text-white' htmlFor="username">Username</label>
                      <Field type="text" name="username" className="form-control" />
                      <ErrorMessage name="username" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                      <label className='h5 fw-bold text-white' htmlFor="password">Password</label>
                      <Field type="password" name="password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="error-message" />
                    </div>

                    <div className="form-group d-flex justify-content-between">
                      <label>
                        <Field type="checkbox" name="rememberMe" className="form-check-input" />
                        &nbsp; Remember Me
                      </label>
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-warning w-100 fw-bold" disabled={isSubmitting}>
                        {isSubmitting ? 'Logging in...' : 'Log-in'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className='text-center text-secondary mt-3'>
                By continuing, you agree to the website's <Link className='text-primary' to="/conditions">Conditions of use</Link> and <Link className='text-primary' to="/conditions">Privacy Notice</Link>
              </div>

              <div className='text-center mt-3'>
                <div className='text-secondary'> New user? </div>
                <Link className='btn btn-danger w-50 mx-auto' to="/registerpage">Create New Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;