import React, { useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { editClientThunk } from "./editSlice";
import { detailsOfClientsThunk } from "./detailsSlice";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    (store) => store.editClient
  );
  const { client, status, loading } = useSelector(
    (store) => store.detailsOfClient
  );
  useEffect(() => {
    dispatch(detailsOfClientsThunk(id));
  }, [id]);
  useEffect(() => {
    // if (isSuccess) {
    //   navigate("/admin");
    // }
  }, []);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    gender: Yup.string().required("This field is required"),
    primaryPhoneNumber: Yup.string().required("This field is required"),
    location: Yup.object().shape({
      name: Yup.string().required("This field is required"),
    }),
    address: Yup.object().shape({
      address1: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      zipCode: Yup.string().required("This field is required"),
    }),
    dob: Yup.string().required("This field is required"),
  });
  const handleEditingAdmin = (formValue) => {
    console.log(formValue);
    dispatch(editClientThunk({ id, formValue }));
  };

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <h2>Edit Client Details</h2>
        <Formik
          initialValues={client}
          validationSchema={validationSchema}
          onSubmit={handleEditingAdmin}
          enableReinitialize={true}
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
              <label htmlFor="last">Gender</label>
              <Field name="gender" type="text" className="form-control" />
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
              <label htmlFor="last">Date Of Birth</label>
              <Field name="dob" type="text" className="form-control" />
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
