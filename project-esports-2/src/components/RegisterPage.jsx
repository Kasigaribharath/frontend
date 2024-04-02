import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import "./RegisterPage.css"

const RegisterPage = () => {
  const navigate = useNavigate();

  const indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];


  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
    state: '',
    phoneNumber: '',
    email: '',
    mpin: '',
    termsAndConditions: true,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores').required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    state: Yup.string().required('State is required'),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Phone Number must be exactly 10 digits').required('Phone Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mpin: Yup.string().matches(/^[0-9]{5}$/, 'MPIN must be exactly 5 digits').required('MPIN is required'),
    termsAndConditions: Yup.boolean().oneOf([true], 'Must accept terms and conditions'),
  });

  const handleSubmit = (values, { setSubmitting, setFieldError }) => {
    setTimeout(() => {

      axios.post('http://localhost:3000/api/register/', values)
        .then(response => {
          console.log('Registration successful:', response.data);
          window.scrollTo(0, 0);
          navigate("/login");
        })
        .catch(error => {
          setFieldError("termsAndConditions", "Account linked to this number already exists")
        });
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="form-container p-3 ">
      <div className=' registerform  position-relative'>
        <h2 className='text-center text-danger mb-5'>Create Account</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ isSubmitting }) => (
            <Form >
              <div className=' form-floating mb-3'>
                <Field className="form-control" type="text" name="username" placeholder="Username" />
                <label className='text-secondary' htmlFor="username">Username</label>
                <ErrorMessage name="username" component="div" className='text-danger' />
              </div>

              <div className=' form-floating mb-3'>
                <Field className="form-control" type="password" name="password" placeholder="Password" />
                <label className='text-secondary' htmlFor="password">Password</label>
                <ErrorMessage name="password" component="div" className='text-danger' />
              </div>

              <div className=' form-floating mb-3'>
                <Field className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" />
                <label className='text-secondary' htmlFor="confirmPassword">Confirm Password</label>
                <ErrorMessage name="confirmPassword" component="div" className='text-danger' />
              </div>

              <div className=' mb-3'>
                <Field as="select" name="state" className="form-select">
                  <option value="">Select a state</option>

                  {indianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </Field>

                <ErrorMessage name="state" component="div" className='text-danger' />
              </div>

              <div className=' form-floating mb-3'>
                <Field className="form-control" type="text" name="phoneNumber" placeholder="Phone Number" />
                <label className='text-secondary' htmlFor="phoneNumber">Phone Number</label>
                <ErrorMessage name="phoneNumber" component="div" className='text-danger' />
              </div>

              <div className=' form-floating mb-3'>
                <Field className="form-control" type="email" name="email" placeholder="Email" />
                <label className='text-secondary' htmlFor="email">Email</label>
                <ErrorMessage name="email" component="div" className='text-danger' />
              </div>

              <div className=' form-floating mb-3'>
                <Field className="form-control" type="password" name="mpin" placeholder="MPIN" />
                <label className='text-secondary' htmlFor="mpin">* Set 5 digit MPIN <span className='text-secondary'>don't forget it</span></label>
                <ErrorMessage name="mpin" component="div" className='text-danger' />
              </div>

              <div className="form-check">
                <Field className="form-check-input" type="checkbox" name="termsAndConditions" />
                <label htmlFor="termsAndConditions"> <Link to={"/tmc"} >Accept Terms and Conditions</Link></label>
              </div>
              <ErrorMessage name="termsAndConditions" component="div" className='text-danger' />

              <div className='text-center'>
                <button type="submit" className='btn btn-danger '>Register</button>
              </div>
              {
                isSubmitting &&
                <div className=" position-absolute w-100 h-100 bg-light btn start-0 top-0 z-3"  >
                  <span className="spinner-grow bg-success spinner-grow-sm"></span>Registration Successful
                  <br />
                  Please login to Continue
                </div>
              }

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
