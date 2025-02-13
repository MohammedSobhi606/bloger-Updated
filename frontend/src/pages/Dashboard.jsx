import React from "react";
import { Outlet } from "react-router-dom";

import DashSidebar from "../components/DashSidebar";

function Dashboard() {
  return (
    <div className="flex flex-col sm:flex-row md:p-5 gap-x-4 min-h-screen">
      <DashSidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
