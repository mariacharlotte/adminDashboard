import Sidebar from "./components/Sidebar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Orders from "./components/Orders";
import Reports from "./components/Reports";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
