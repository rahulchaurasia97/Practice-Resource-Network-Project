import React, { useEffect } from "react";
//import { Button, Form } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createAdminThunk } from "./createSlice";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    (store) => store.createAdmin
  );
  useEffect(() => {
    // if (isSuccess) {
    //   navigate("/admin");
    // }
  }, []);

  const initialValues = {
    firstName: "",
    lastName: "",
    title: "",
    extension: "",
    primaryPhoneNumber: "",
    hours: "",
    hireDate: "2022-05-18",
    person: {
      email: "",
      secret: "",
      role: {
        id: 1,
      },
    },
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    practices: [],
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    person: Yup.object().shape({
      email: Yup.string().required("This field is required"),
      secret: Yup.string().required("This field is required"),
      // role: {
      //   id: 1,
      // },
    }),
    // password: Yup.string().required("This field is required!"),
    // confirm_password: Yup.string().required("This field is required!"),
  });
  const handleCreatingAdmin = (formValue) => {
    console.log(formValue);
    dispatch(createAdminThunk(formValue));
  };

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <h2>New Admin Details</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreatingAdmin}
          validate={(data, error) => console.log(data, error)}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="Name">First Name</label>
              <Field name="firstName" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="last">Last Name</label>
              <Field name="lastName" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="person.email"
                type="email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="person.secret"
                type="password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="secret">Confirm Password</label>
              <Field name="passowrd" type="password" className="form-control" />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                <span>Submit</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
