import React from "react";
import "./Admin.css";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Payments from "../router/payment/Payment";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Teacher from "../components/Students/Teacher";
import StudentsMain from "../components/studentsMain/StudentsMain";

function Admin() {
  return (
    <div className="admin">
      <div className="admin_sidebar">
        <Sidebar />
      </div>
      <div className="admin-right">
        <Navbar />
        <div className="admin_content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/teachers" element={<Teacher />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/students" element={<StudentsMain />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
