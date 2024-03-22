import React from "react";
import { Chart } from "chart.js";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "My First Dataset",
        data: [15, 7, 23, 15],
        borderColor: "#FF4500",
        backgroundColor: "#FFA500",
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
