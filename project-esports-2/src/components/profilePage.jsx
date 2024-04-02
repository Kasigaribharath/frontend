import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ProfilePage.css"
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function ProfilePage() {

  const [Data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie,removeCookie] = useCookies("message","username","mpin","money","csrftoken");

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user_info/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        });
        // console.log(response.data);
        setData(response.data);
        // console.log(cookies["mpin"],"is Mpin");
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // this is staff verification  
    const isStaff = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/is_staff", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        });
          setCookie("message",response.data.message)
      } catch (error) {
        console.log(error);
      }
    };

    isStaff();
    fetchData();
  }, []);

  function handleSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    if(cookies["message"]){
      removeCookie("message");
    }
    removeCookie("mpin")
    removeCookie("money")
    removeCookie("username")
    removeCookie("csrftoken")
    navigate("/");
    window.location.reload();
  }

  return (
    <div className='profilewrap'>
      <div className="accountContainer mx-auto">
        <h2 className="mb-4 text-white d-flex justify-content-between">
          <span>Your Profile</span>
          <div className="LoginTogglers">
            <button className='btn btn-danger' onClick={handleSignOut}>Logout</button>
          </div>
        </h2>

        <Formik
          initialValues={{
            username: Data.username,
            phone: Data.phone,
            email: Data.email,
            mpin: Data.mpin
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required('Username is required'),
            phone: Yup.string().required('Phone number is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            mpin: Yup.string().required('MPIN is required')
          })}
          onSubmit={(values, { setSubmitting }) => {
            // Simulate form submission
            setTimeout(() => {
              // Submit data here
              console.log(values);
              setSubmitting(false);
              setEditMode(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row mb-3">
                <div className="col">
                  <h3 className="text-white d-flex justify-content-between align-items-center">
                    Username
                  </h3>
                  {!editMode ? (
                    <div className="value-box text-white-50 p-2">{Data.username}</div>
                  ) : (
                    <Field type="text" name="username" className="form-control" />
                  )}
                  <ErrorMessage name="username" component="div" className="text-danger" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <h3 className="text-white d-flex justify-content-between align-items-center">
                    phone
                  </h3>
                  {!editMode ? (
                    <div className="value-box text-white-50 p-2">{Data.phone}</div>
                  ) : (
                    <Field type="text" name="phone" className="form-control" />
                  )}
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <h3 className="text-white d-flex justify-content-between align-items-center">
                    Email
                  </h3>
                  {!editMode ? (
                    <div className="value-box text-white-50 p-2">{Data.email}</div>
                  ) : (
                    <Field type="email" name="email" className="form-control" />
                  )}
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <h3 className="text-white d-flex justify-content-between align-items-center">
                    MPIN
                  </h3>
                  {!editMode ? (
                    <div className="value-box text-white-50 p-2">{Data.mpin}</div>
                  ) : (
                    <Field type="text" name="mpin" className="form-control" />
                  )}
                  <ErrorMessage name="mpin" component="div" className="text-danger" />
                </div>
              </div>

              <div className='d-flex justify-content-center'>{editMode && (
                <button type="submit" className="btn btn-primary"  disabled={isSubmitting}>{isSubmitting ? "Saving" : "save"}</button>
              )}</div>

            </Form>
          )}
        </Formik>
        <div className=' d-flex justify-content-center'>
          {!editMode && <button className='btn btn-primary w-25 bg-gradient  ' onClick={() => setEditMode(true)}>Edit</button>}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
