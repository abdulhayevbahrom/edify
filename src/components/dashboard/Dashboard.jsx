import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Boshqaruv</h1>
      <div className="dashboard-statistics">
        <div className="students-flow"></div>
        <div className="pay-and-payments"></div>
        <div className="dashboard-messages"></div>
      </div>
      <div className="teachers-info-index"></div>
    </div>
  );
}

export default Dashboard;
