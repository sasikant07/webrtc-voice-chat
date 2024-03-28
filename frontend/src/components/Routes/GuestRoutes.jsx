import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = () => {
    const isAuth = false;

    if (!isAuth) {
        return <Outlet />;
      } else {
        return <Navigate to="/rooms" replace={true} />;
      }
}

export default GuestRoutes;