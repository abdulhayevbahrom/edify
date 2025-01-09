import React from "react";
import "./Admin.css";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin-right">
        <Navbar />
        <div className="admin_content">
          <Routes>
            <Route path="/payments" />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
