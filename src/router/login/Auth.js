import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const Auth = () => {
  let location = useLocation();
  let token = localStorage.getItem("token");

  if (token) return <Outlet />;
  return <Navigate to="/login" state={{ from: location }} />;
};
