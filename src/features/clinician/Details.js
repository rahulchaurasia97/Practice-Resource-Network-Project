import React from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailsOfCliniciansThunk } from "./detailsSlice";
export const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { clinician, status, loading } = useSelector(
    (store) => store.detailsOfClinician
  );
  useEffect(() => {
    dispatch(detailsOfCliniciansThunk(id));
  }, []);

  return (
    <>
      <h2>Details Of Clinician</h2>

      <div>
        <p>
          Name:{clinician?.firstName} {clinician?.lastName}
        </p>
        <p>primaryPhoneNumber:{clinician?.primaryPhoneNumber}</p>
        <p>Address:{clinician?.address?.address1}</p>
        <p>City:{clinician?.address?.city}</p>
        <p>State:{clinician?.address?.state}</p>
        <p>ZipCode:{clinician?.address?.zipCode}</p>
        <p>BioLink:{clinician?.bioLink}</p>

        <p>Email:{clinician?.person?.email}</p>
        <p>Role:{clinician?.person?.role?.name}</p>
      </div>
    </>
  );
};
