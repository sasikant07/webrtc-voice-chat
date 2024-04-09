import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SemiProtectedRoutes = () => {
  const { user, isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to="/" replace={true} />;
  } else if (isAuth && !user.activated) {
    return <Outlet />;
  } else {
    return <Navigate to="/rooms" replace={true} />;
  }
};

export default SemiProtectedRoutes;
