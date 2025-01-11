import React from "react";
import "./Admin.css";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Payments from "../router/payment/Payment"
import { Route, Routes } from "react-router-dom";

function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin-right">
        <Navbar />
        <div className="admin_content">
          <Routes>
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
