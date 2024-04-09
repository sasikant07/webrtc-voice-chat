import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user, isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to="/" replace={true} />;
  } else if (isAuth && !user.activated) {
    return <Navigate to="/activate" replace={true} />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoutes;
