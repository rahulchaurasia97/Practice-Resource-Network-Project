import React from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailsOfClientsThunk } from "./detailsSlice";
export const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { client, status, loading } = useSelector(
    (store) => store.detailsOfClient
  );
  useEffect(() => {
    dispatch(detailsOfClientsThunk(id));
  }, []);

  return (
    <>
      <h2>Details Of Client</h2>

      <div>
        <p>
          Name:{client?.firstName} {client?.lastName}
        </p>
        <p>primaryPhoneNumber:{client?.primaryPhoneNumber}</p>
        <p>Address:{client?.address?.address1}</p>
        <p>City:{client?.address?.city}</p>
        <p>State:{client?.address?.state}</p>
        <p>ZipCode:{client?.address?.zipCode}</p>
        <p>Date Of Birth:{client?.dob}</p>
        <p>Default Location:{client?.location?.name}</p>
      </div>
    </>
  );
};
