import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Dashboard = () => {
  return (
    <div className="dashboardBg py-4 px-2">
      <div className="d-flex">
        <div className="py-2 px-5 ms-1 bg-white rounded w-25 d-flex justify-content-between align-items-center">
          <i className="bi bi-currency-dollar text-success fs-4"></i>
          <div className="d-flex flex-column">
            <span>Sales</span>
            <span className="fs-2">432</span>
          </div>
        </div>

        <div className="py-2 px-5 ms-1 bg-white rounded w-25 d-flex justify-content-between align-items-center">
          <i className="bi bi-truck text-warning fs-4"></i>
          <div className="d-flex flex-column">
            <span>Delivery</span>
            <span className="fs-2">270</span>
          </div>
        </div>

        <div className="py-2 px-5 ms-1 bg-white rounded w-25 d-flex justify-content-between align-items-center">
          <i className="bi bi-graph-up-arrow text-danger fs-4"></i>
          <div className="d-flex flex-column">
            <span>Increase</span>
            <span className="fs-2">20%</span>
          </div>
        </div>

        <div className="py-2 px-5 ms-1 bg-white rounded w-25 d-flex justify-content-between align-items-center">
          <i className="bi bi-currency-dollar text-primary fs-4"></i>
          <div className="d-flex flex-column">
            <span>Sales</span>
            <span className="fs-2">432</span>
          </div>
        </div>
      </div>

      <div className="ms-1 my-4 d-flex gap-4 justify-content-between">
        <div className="bg-white w-100">
          <LineChart />
        </div>
        <div className="bg-white w-50">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
