import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SemiProtectedRoutes = () => {
  const isAuth = true;
  const user = {
    activated: false,
  };

  if (!isAuth) {
    return <Navigate to="/" replace={true} />;
  } else if (isAuth && !user.activated) {
    return <Outlet />;
  } else {
    return <Navigate to="/rooms" replace={true} />;
  }
};

export default SemiProtectedRoutes;
