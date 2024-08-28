import React, { Fragment, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

const PrivateRoute = () => {
  return (
    <Fragment>
      {!localStorage.getItem("accessToken") ? (
        <Navigate to={`/`} />
      ) : (
        <Navbar>
          <Outlet />
        </Navbar>
      )}
    </Fragment>
  );
};

export default PrivateRoute;
