import React from "react";
import "./Admin.css";
import Sidebar from "../components/sidebar/Sidebar";

function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin_content">
        <h1>Content</h1>
      </div>
    </div>
  );
}

export default Admin;
