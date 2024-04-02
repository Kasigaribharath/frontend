import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useCookies } from 'react-cookie';

const MoneyWithdrawalForm = () => {
  const [cookies,] = useCookies(["mpin"]);

  return (
    <div className="withdrawal-form-container position-relative">
      <h1 className="form-title">Withdraw Money</h1>
      <Formik
        initialValues={{ amount: '', upiId: "", beneficieryName: "", mpin: '' }}
        validationSchema={yup.object().shape({
          amount: yup.number()
            .min(10, 'Amount must be at least 10 Rs')
            .max(1000, 'Amount must be at most 1000 Rs')
            .required('Amount is required'),
          upiId: yup.string().required(),
          beneficieryName: yup.string().required(),
          mpin: yup.string()
            .matches(/^\d{5}$/, 'MPIN must be exactly 5 digits')
            .oneOf([cookies["mpin"].toString()], "Enter valid MPIN")
            .required('MPIN is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:3000/api/withdraw/", values, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          })
            .then(() => {
              window.scrollTo(0, 0);
            })
            .catch(error => {
              console.error("Error:", error);
            })
            .finally(() => {
              setTimeout(() => {
                setSubmitting(false);
              }, 4000);
            });
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="form">
            <div className="mb-3 form-floating">
              <Field type="number" id="amount" name="amount" className="form-control" placeholder="" />
              <label htmlFor="amount" className="text-secondary"> Amount (Rs):</label>
              <ErrorMessage name="amount" component="div" className="error-message" />
            </div>

            <div className="mb-3 form-floating">
              <Field type="text" id="beneficieryName" name="beneficieryName" className="form-control" placeholder="" />
              <label htmlFor="beneficieryName" className="text-secondary">Beneficiary Name :</label>
              <ErrorMessage name="beneficieryName" component="div" className="error-message" />
            </div>

            <div className="mb-3 form-floating">
              <Field type="text" id="upiId" name="upiId" className="form-control" placeholder="" />
              <label htmlFor="upiId" className="text-secondary">UPI Id :</label>
              <ErrorMessage name="upiId" component="div" className="error-message" />
            </div>

            <div className="mb-3 form-floating">
              <Field type="password" id="mpin" name="mpin" className="form-control" placeholder="" />
              <label htmlFor="mpin" className="text-secondary"> MPIN:</label>
              <ErrorMessage name="mpin" component="div" className="error-message" />
            </div>

            <button
              type="submit"
              className="btn btn-warning w-100 mt-3"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? "Withdrawing...." : "Withdraw"}
            </button>
            {isSubmitting &&
              <div className='btn bg-light text-dark w-100 h-100 position-absolute top-0 start-0 z-3'>
                <span className="spinner-grow spinner-grow-sm  bg-success" role="status"></span>
                <small className='fw-bold '>Processing your payment </small>
                <div className='pt-5 small'>your money will be credited in 10 minutes, <br />  Please check your status in your wallet history...</div>
              </div>
            }
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MoneyWithdrawalForm;
