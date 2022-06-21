import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import "./App.css";

/**Manage routes and render pages
 * @function App
 * @returns {JSX}
 */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}
