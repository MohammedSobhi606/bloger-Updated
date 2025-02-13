import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function AdminRoutes() {
  const { user } = useSelector((state) => state.user);
  if (user.isAdmin) {
    return <Outlet />;
  } else {
    return alert("You are not authorized to access this page.");
  }
}

export default AdminRoutes;
