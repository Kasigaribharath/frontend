import React, { useState } from 'react';
import axios from 'axios';
import upilogo from "./component-images/UPILogo.png"
import qrimg from "./component-images/qrpic.png"
import paymentQR from "./component-images/paymentQR.png"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function DepositForm() {
    const [upiEnabled, setUpienable] = useState("d-none")
    const [scannerEnabled, setScannerenable] = useState("d-none")

    function handleUpi() {
        setUpienable("d-block");
        setScannerenable("d-none");
    }
    function handleScanner() {
        setScannerenable("d-block");
        setUpienable("d-none");
    }

    // Define Yup schema for form validation

    return (
        <div className=" position-relative container mt-4 ">
            <h2 className='text-warning text-center pb-5'>Deposit Money</h2>
            <Formik
                initialValues={{ amount: 10, paymentOption: '', utrid: '' }}
                validationSchema={Yup.object().shape({
                    amount: Yup.number().required('Please enter amount.').min(10, "minimum 10 rupees").max(1000, "maximum 1000 rupees"),
                    paymentOption: Yup.string().required('Please select a payment option.'),
                    utrid: Yup.string().required('UTR id is required.')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                        axios.post("http://localhost:3000/api/deposit/", values, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                            }
                        });
                        setSubmitting(false);
                    }, 4000);
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form>
                        <div className=" form-floating mb-3">
                            <Field type="number" name="amount" className="form-control" placeholder="" />
                            <label className='text-secondary fw-bold' htmlFor="amount">Select Amount:</label>
                            <ErrorMessage name="amount" component="div" className="error-message" />
                        </div>
                        <div className="mb-3">
                            <label>Select Payment Option:</label>
                            <div onClick={handleScanner}>
                                <Field type="radio" name="paymentOption" value="upi" id="upi" />
                                <label className='text-secondary fw-bold' htmlFor="upi">&nbsp; UPI <img src={upilogo} width={50} alt="" /></label>
                            </div>

                            <div onClick={handleUpi}>
                                <Field type="radio" name="paymentOption" value="scanner" id="scanner" />
                                <label className='text-secondary fw-bold' htmlFor="scanner">&nbsp; QR Code <img src={qrimg} width={30} height={20} alt="" /></label>
                            </div>
                            <ErrorMessage name="paymentOption" component="div" className="error-message" />

                            <div className={`${scannerEnabled} text-dark bg-light rounded shadow-3 p-3`}>
                                <h2>Payment Details </h2>
                                Name : <span className='text-secondary'> &nbsp; Vishwas</span>
                                <br />
                                UPI Id : <span className='text-secondary'>&nbsp; agentgaming@ybl</span>

                            </div>

                            <div className={upiEnabled}>
                                <img src={paymentQR} className='rounded' width={200} alt="error showing QR" />
                            </div>
                        </div>
                        <div className=" form-floating mb-3">
                            <Field type="text" name="utrid" className="form-control" placeholder="" />
                             <label className='text-secondary fw-bold' htmlFor="utrid">Transaction ID (UTR):</label>
                            <ErrorMessage name="utrid" component="div" className="error-message" />
                        </div>
                        <button type="submit" disabled={isSubmitting || !isValid} className="btn btn-warning" >
                            {isSubmitting ? 'Submitting...' : 'Deposit Now'}
                        </button>
                        {
                            isSubmitting &&
                            <div className=" position-absolute w-100 h-100 bg-light btn start-0 top-0 z-3"  >
                                <span className="spinner-grow bg-success spinner-grow-sm"></span><small>Processing your payment</small>
                                <br />
                                Money will be deposited in 10 minutes
                            </div>
                        }
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default DepositForm;