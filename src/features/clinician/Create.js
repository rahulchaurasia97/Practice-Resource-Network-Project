import React, { useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createClinicianThunk } from "./createSlice";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    (store) => store.createClinician
  );
  useEffect(() => {
    // if (isSuccess) {
    //   navigate("/admin");
    // }
  }, []);

  // const initialValues = {
  //   // id: 0,
  //   firstName: "",
  //   lastName: "",
  //   signatureFilePath: "",
  //   primaryPhoneNumber: "",
  //   extension: 0,
  //   degreeAndLicense: "",
  //   bioLink: "",
  //   signatureFileName: "",
  //   teletherapyFlag: true,
  //   activeFlag: true,
  //   person: {
  //     email: "",
  //     secret: "",
  //     role: {
  //       id: 2,
  //     },
  //   },
  //   address: {
  //     address1: "",
  //     address2: "",
  //     city: "",
  //     state: "",
  //     zipCode: "",
  //   },
  //   locations: [],
  //   locationsNotAcceptingNewPatients: [],
  //   specialities: [],
  //   insurances: [],
  //   supervisees: [],
  //   licensedStates: [],
  //   demographics: [],
  //   supervisingProvider: {
  //     id: 84,
  //     firstName: "Maria",
  //     lastName: "Garcia",
  //     activeFlag: true,
  //     acceptingNewPatientFlag: true,
  //   },
  // };
  const initialValues = {
    id: 0,
    firstName: "",
    lastName: "",
    primaryPhoneNumber: "",
    extension: 0,
    degreeAndLicense: "",
    bioLink: "",
    signature: "",
    teletherapyFlag: true,
    activeFlag: true,
    person: {
      email: "",
      secret: "",
      role: {
        id: 2,
      },
    },
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    locations: [],
    locationsNotAcceptingNewPatients: [],
    specialities: [],
    insurances: [],
    supervisees: [],
    licensedStates: [],
    demographics: [],
    supervisingProvider: {},
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    bioLink: Yup.string().required("This field is required"),
    primaryPhoneNumber: Yup.string().required("This field is required"),
    person: Yup.object().shape({
      email: Yup.string().required("This field is required"),
      secret: Yup.string().required("This field is required"),
    }),
    address: Yup.object().shape({
      address1: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      zipCode: Yup.string().required("This field is required"),
    }),

    // dob: Yup.string().required("This field is required"),
  });
  const handleCreatingAdmin = (formValue) => {
    console.log(formValue);
    dispatch(createClinicianThunk(formValue));
  };

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <h2>New Clinician Details</h2>
        <Formik
          initialValues={initialValues}
          //  validationSchema={validationSchema}
          onSubmit={handleCreatingAdmin}
          //validate={(data, error) => console.log(data, error)}
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
              <label htmlFor="last">Primary Phone No.</label>
              <Field
                name="primaryPhoneNumber"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last">Address1</label>
              <Field
                name="address.address1"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last">City</label>
              <Field name="address.city" type="text" className="form-control" />
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
                name="address.zipCode"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last">Bio Link</label>
              <Field name="bioLink" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="last">Email</label>
              <Field
                name="person.email"
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last">Password</label>
              <Field
                name="person.secret"
                type="password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last">Confirm Password</label>
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
