import React from "react";
import "../styles/dashboardtopcard.css";

const DashboardTopCard = ({ icon, title, value, change, type }) => {
  return (
    <div className="dashboard-top-card card-container">
      <div className="top-icon-container">{icon}</div>
      <div className="top-card-content">
        <span className="top-card-title light-text">{title}</span>
        <div className="top-card-values">
          <strong>{value}</strong>
          <span className={`change ${type}`}>{change}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopCard;
