import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const RankGraph = () => {
  const [data, setData] = useState({
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        fill: true,
        label: "Score",
        data: [5, 20, 25, 35, 40, 50],
        borderColor: "rgb(70, 70, 70)",
        backgroundColor: "rgba(70, 70, 70,0.2)",
        tension: 0.3,
      },
    ],
  });
  return (
    <section className="graph score-container card-container ">
      <div className="graph-top">
        <h5 className="graph-heading">Score Stats</h5>
        <div className="dropdown">
          <strong className="dropdown-label">Sort By: </strong>
          <select
            name="sort"
            id="sort"
          >
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
          </select>
        </div>
      </div>
      <div className="score-graph">
        <Line
          data={data}
          options={{
            responsive: true,
          }}
        />
      </div>
    </section>
  );
};

export default RankGraph;
