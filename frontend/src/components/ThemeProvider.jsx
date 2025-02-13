import React from "react";
import { useSelector } from "react-redux";
function ThemeProvider({ children }) {
  const { user } = useSelector((state) => state.user);
  return (
    <div className={(user && user.theme) || "light"}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default ThemeProvider;
