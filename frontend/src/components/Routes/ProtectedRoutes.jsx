import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuth = false;
  const user = {
    activated: false,
  };

  if (!isAuth) {
    return <Navigate to="/" replace={true} />;
  } else if (isAuth && !user.activated) {
    return <Navigate to="/activate" replace={true} />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoutes;
