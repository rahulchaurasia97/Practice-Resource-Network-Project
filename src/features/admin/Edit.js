import React, { useEffect } from "react";
//import { Button, Form } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { editAdminThunk } from "./editSlice";
import { detailsOfAdminsThunk } from "./detailsSlice";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    (store) => store.editAdmin
  );
  const { admin, status, loading } = useSelector(
    (store) => store.detailsOfAdmin
  );
  useEffect(() => {
    dispatch(detailsOfAdminsThunk(id));
  }, [id]);
  useEffect(() => {
    // if (isSuccess) {
    //   navigate("/admin");
    // }
  }, []);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    person: Yup.object().shape({
      email: Yup.string().required("This field is required"),
    }),
  });
  const handleCreatingAdmin = (formValue) => {
    console.log(id, formValue);
    dispatch(editAdminThunk({ id, formValue }));
  };

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <h2>Edit Admin Details</h2>
        <Formik
          initialValues={admin}
          validationSchema={validationSchema}
          onSubmit={handleCreatingAdmin}
          validate={(data, error) => console.log(data, error)}
          enableReinitialize={true}
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
