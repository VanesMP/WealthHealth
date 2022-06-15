import { NavLink } from "react-router-dom";
import React from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";

/** Render to create new employee page
 * @function CreateEmployee
 * @returns {JSX}
 */

export default function CreateEmployee() {

    let activeStyle = { textDecoration: "underline" };

    return(
        <div className="containerCreateEmployee">
            <Header />
            <div className="container">
                <div className="elementNav">
                    <NavLink to="/"className="nav" style={({ isActive }) => isActive ? activeStyle : undefined} >🖋 Create Employee</NavLink>
                    <NavLink to="/employees"className="nav" style={({ isActive }) => isActive ? activeStyle : undefined} >📋 View Current Employees</NavLink>
                </div>
                <Form/>
            </div>
        </div>
    )}
