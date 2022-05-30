import React from "react";
import { Outlet } from "react-router-dom";
const eventContainer = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default eventContainer;
