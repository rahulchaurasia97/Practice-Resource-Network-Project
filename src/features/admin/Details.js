import React from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { detailsOfAdminsThunk } from "./detailsSlice";
export const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { admin, status, loading } = useSelector(
    (store) => store.detailsOfAdmin
  );
  useEffect(() => {
    return () => {
      const data = dispatch(detailsOfAdminsThunk(id));
    };
  }, [id]);
  return (
    <>
      <h2>Details Of Admin</h2>

      <div>
        <p>
          Name:{admin?.firstName} {admin?.lastName}
        </p>
        <p>Email:{admin?.person?.email}</p>
        <p>Role:{admin?.person?.role?.name}</p>
      </div>
    </>
  );
};
