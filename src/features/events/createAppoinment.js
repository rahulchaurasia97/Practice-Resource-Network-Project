import React, { useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createAppoinmentThunk } from "./createAppoinmentSlice";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const CreateAppoinment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    (store) => store.createAppoinment
  );

  const initialValues = {
    description: "",
    startDt: "",
    endDt: "",
    timezone: "America/New_York",
    recurringFlag: true,
    recurringEndDt: "2022-05-24T06:33:44.720Z",
    location: {
      id: 0,
      name: "",
      code: "",
      address: {
        id: 0,
        address1: "",
        address2: "",
        city: "",
        state: "",
        deleteFlag: true,
        zipCode: "",
      },
    },
    clinician: {
      id: 89,
      firstName: "sushil",
      lastName: "kumar",
      activeFlag: true,
      acceptingNewPatientFlag: true,
    },
    client: {
      id: 168,
      firstName: "Ava",
      lastName: "Ashley",
      email: "",
      dob: "2016-05-02",
      clientFlag: false,
      activeFlag: true,
      accountNumber: 1652176569100,
      note: "",
      billingNote: "",
    },
  };
  const validationSchema = Yup.object().shape({
    startDt: Yup.string().required("This field is required"),
    endDt: Yup.string().required("This field is required"),

    location: Yup.object().shape({
      name: Yup.string().required("This field is required"),
      address: Yup.object().shape({
        address1: Yup.string().required("This field is required"),
        city: Yup.string().required("This field is required"),
        state: Yup.string().required("This field is required"),
        zipCode: Yup.string().required("This field is required"),
      }),
    }),
  });
  const handleCreatingAppoinment = (formValue) => {
    console.log(formValue);
    dispatch(createAppoinmentThunk(formValue));
  };

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <h2>Create New Appoinment</h2>
        <Formik
          initialValues={initialValues}
          //   validationSchema={validationSchema}
          onSubmit={handleCreatingAppoinment}
          //validate={(data, error) => console.log(data, error)}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="Name">Start Date</label>
              <Field name="startDt" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="last">End Date</label>
              <Field name="endDt" type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="last">Address1</label>
              <Field
                name="location.address.address1"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last">City</label>
              <Field
                name="location.address.city"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last">State</label>
              <Field
                name="address.state"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last">ZipCode</label>
              <Field
                name="location.address.zipCode"
                type="text"
                className="form-control"
              />
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
