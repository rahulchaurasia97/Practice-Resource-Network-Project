import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export const PrivateLayout = () => {
  if (!localStorage.getItem("token")) {
    console.log("inside protected");
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
