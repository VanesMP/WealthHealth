import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import './App.css';

/**Manage routes and render pages
 * @function App
 * @returns {JSX}
 */
export default function App() {

    return ( 
      <Router>  
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/list" element={<EmployeeList/>}/>
          <Route path="/new" element={<CreateEmployee/>}/>
        </Routes> 
    </Router> 
    );
}
