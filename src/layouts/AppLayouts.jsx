import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayouts() {
  return (
    <div className="dark:bg-neutral-700 bg-gray-100">
      <Navbar />
      <Outlet />
    </div>
  );
}
