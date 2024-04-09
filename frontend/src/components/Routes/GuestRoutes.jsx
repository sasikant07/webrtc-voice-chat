import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/rooms" replace={true} />;
  }
};

export default GuestRoutes;
