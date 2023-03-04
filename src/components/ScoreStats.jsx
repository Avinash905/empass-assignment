import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ScoreStats = () => {
  const [data, setData] = useState({
    labels: ["Excellent ", "Good", "Average", "Below Average"],
    datasets: [
      {
        label: "Orders",
        backgroundColor: [
          "rgb(19, 233, 19)",
          "rgb(0, 114, 0)",
          "rgb(235, 235, 235)",
          "rgb(255, 117, 74)",
        ],
        data: [50, 40, 7, 3],
      },
    ],
  });

  return (
    <section className="graph scorestats-container card-container ">
      <div className="graph-top">
        <h5 className="graph-heading">Tests Graph</h5>
      </div>
      <div className="scorestats-graph">
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            responsive: true,
          }}
        />
      </div>
    </section>
  );
};

export default ScoreStats;
