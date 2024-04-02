import { Field, Form, Formik, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";
import "../components/bookslot.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";



// slot booking confirmation page 


export function Register() {

    const navigate = useNavigate();
    const params = useParams();
    const [cookies] = useCookies(["username", "mpin"]);
    const [bookslotError, setBookslotError] = useState(false); // State to track loading

    return (
        <div className="wrap bg-dark">

            <div className="register bg-dark position-relative">
                <Formik initialValues={{
                    team_name: "",
                    team_leader: cookies["username"],
                    in_game_name: "",
                    phone_number: "",
                    optional_phone_number: "",
                    checkbox: false,
                    mpin: ""
                }}
                    validationSchema={
                        yup.object({
                            team_name: yup.string().required().min(4, "Min length is 4").matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
                            in_game_name: yup.string().required("In Game Name is required").min(4, "name should be at least 4 letter").matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
                            phone_number: yup.string().required("Mobile Number is required").matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
                            optional_phone_number: yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
                            checkbox: yup.boolean().required(""),
                            mpin: yup.string().required("Mpin is required").matches(/^[0-9]{5}$/, 'Mpin must be exactly 5 digits').oneOf([cookies["mpin"].toString()], "enter valid mpin")
                        })
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        axios.post(`http://localhost:3000/api/book_slot/${params.id}/`, values, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                            }
                        })
                        .then(res => {
                            console.log(res.data);
                            window.scrollTo(0, 0);
                            // Handle success here
                            // Set state or perform any action on success
                        })
                        .catch(error => {
                            console.error(error, "slot booking error");
                            // Handle error here
                            // Set state or perform any action on error
                            setBookslotError(true);
                        })
                        .finally(() => {
                            // This block of code will execute regardless of success or failure
                            setTimeout(() => {
                                setSubmitting(false)
                                navigate(`/couponentry/${params.id}/slot`);
                            }, 3000);
                        });
                    }}
                    

                >
                    {
                        ({ isValid, isSubmitting }) =>
                            <Form className=" formMain   rounded-3  mx-auto ">
                                <div className="text-light h3 py-3 fw-bold text-center ">Enter your squad details </div>
                               <div className="form-floating"> 
                                <Field className="form-control" type="text" name="team_name" placeholder=""></Field>
                                <label className="text-secondary fw-bold">TEAM NAME :</label>
                                <p className=" text-danger"><ErrorMessage name="team_name"></ErrorMessage></p>
                                </div>

                               <div className="form-floating"> 
                                <Field className="form-control" type="text" name="in_game_name" placeholder=""></Field>
                                <label className="text-secondary fw-bold">IN GAME NAME</label>
                                <p className=" text-danger"><ErrorMessage name="in_game_name"></ErrorMessage></p>
                                </div>
                               <div className="form-floating"> 
                                <Field className="form-control" type="text" name="phone_number" placeholder={""}></Field>
                                <label className="text-secondary fw-bold">MOBILE NO :</label>
                                <p className=" text-danger"><ErrorMessage name="phone_number"></ErrorMessage></p>
                                </div>

                               <div className="form-floating"> 
                                <Field className="form-control" type="text" name="optional_phone_number" placeholder={""}></Field>
                                <label className="text-secondary fw-bold">OPTIONAL NUMBER : </label>
                                <p className=" text-danger"><ErrorMessage name="optional_phone_number"></ErrorMessage></p>
                                </div>

                               <div className="form-floating"> 
                                <Field className="form-control" type="text" name="mpin" placeholder={""}></Field>
                                <label className="text-secondary fw-bold">MPIN </label>
                                <p className=" text-danger"><ErrorMessage name="mpin"></ErrorMessage></p>
                                </div>

                                <div className="form-check form-check-inline">
                                    <Field name="checkbox" required type="checkbox" className=" form-check-input"></Field>
                                    <span className="text-white-50  "> confirm your slot </span>
                                </div>

                                <div className="text-center">
                                <button type="submit"  className="btn btn-danger bg-gradient  w-50 mt-4 " >Confirm </button>
                                </div>

                                {/* Loader */}
                                {
                                    isSubmitting ?
                                        bookslotError ?
                                            <div className=" bg-white position-absolute top-0 start-0 w-100 h-100  text-center p-3 z-3">
                                                <div>
                                                <div className="text-danger loader-title h6">Insufficient Balance! <i className=" bi-x-octagon-fill"></i></div>
                                                <div className="text-secondary">try depositing Money...</div>
                                                <div className="spinner-border text-danger" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                </div>
                                            </div> :
                                            <div className="bg-white position-absolute top-0 start-0 w-100 text-center h-100 p-3 z-3">
                                                <div>
                                                <div className="text-success loader-title h6">Registration Successful! <i className="bi-check-circle-fill"></i></div>
                                                <div className="text-secondary">check in your history...</div>
                                                <div className="text-secondary">check your slot in <span className="text-danger">Participants</span></div>
                                                <div className="spinner-border text-success" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                </div>
                                            </div>
                                        : <></>
                                }
                            </Form>
                    }
                </Formik>
            </div>
        </div >
    )
}