import React from "react";
import Profile from "../components/Profile";
import ScoreGraph from "../components/ScoreGraph";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="main-container">
        <Profile />
        <div className="main-content">
          <ScoreGraph />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
