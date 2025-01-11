import React from "react";
import "./Admin.css";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Teacher from "../components/Students/Teacher";

function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin-right">
        <Navbar />
        <div className="admin_content">
          <Routes>
            <Route path="/payments" />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/teachers" element={<Teacher />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
