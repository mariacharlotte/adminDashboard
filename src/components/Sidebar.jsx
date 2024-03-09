import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  const [active, setActive] = useState(1);
  return (
    <div className="sidebar d-flex justify-content-between flex-column bg-dark text-white vh-100">
      <div>
        {/* Admin Header */}
        <Link to={"/"} className="d-block p-3 text-white">
          {" "}
          <i className="bi bi-code-slash fs-4 me-4"></i> Admin
        </Link>
        <hr className="text-secondary mt-2" />

        <ul className="nav nav-pills flex-column mt-2">
          <Link
            to={"/"}
            className={active === 1 ? "active nav-item py-3" : "nav-item py-3"}
            onClick={(e) => setActive(1)}
          >
            <span className="p-3">
              <i className="bi bi-speedometer2 me-3 fs-5"></i>
              <span className="fs-4">
                <strong>Dashboard</strong>
              </span>
            </span>
          </Link>

          <Link
            to={"/users"}
            className={active === 2 ? "active nav-item py-3" : "nav-item py-3"}
            onClick={(e) => setActive(2)}
          >
            <span className="p-3">
              <i className="bi bi-people me-3 fs-5"></i>
              <span className="fs-4">
                <strong>Users</strong>
              </span>
            </span>
          </Link>

          <Link
            to={"/orders"}
            className={active === 3 ? "active nav-item py-3" : "nav-item py-3"}
            onClick={(e) => setActive(3)}
          >
            <span className="p-3">
              <i className="bi bi-table me-3 fs-5"></i>
              <span className="fs-4">
                <strong>Orders</strong>
              </span>
            </span>
          </Link>

          <Link
            to={"/reports"}
            className={active === 4 ? "active nav-item py-3" : "nav-item py-3"}
            onClick={(e) => setActive(4)}
          >
            <span className="p-3">
              <i className="bi bi-grid me-3 fs-5"></i>
              <span className="fs-4">
                <strong>Reports</strong>
              </span>
            </span>
          </Link>
        </ul>
      </div>

      {/* Admin footer */}
      <div>
        <hr className="text-white mt-2" />
        <Link to={"/admin"}>
          <div className="nav-item p-2">
            <i className="bi bi-person-circle me-3 fs-4"></i>
            <span className="fs-4">
              <strong>Admin</strong>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
