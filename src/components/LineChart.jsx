import { Chart } from "chart.js/auto";
import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 15, 7, 23, 15],
        fill: false,
        borderColor: "#FF4500",
        backgroundColor: "#FFA500",
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
