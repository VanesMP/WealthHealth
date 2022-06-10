import { NavLink } from "react-router-dom";
import Header from "../Components/Header";

/**Render to see all the employees
 * @function EmployeeList
 * @returns {JSX}
 */

export default function EmployeeList() {

    let activeStyle = {
        textDecoration: "underline"
      };

    return(
        <div className="containerEmployeeList">
            <Header />
            <div id="employee-div" className="container">
                <div className="elementNav">
                    <NavLink to="/employees" style={({ isActive }) => isActive ? activeStyle : undefined} className="nav">Current Employees</NavLink>
                    <table id="employee-table" className="display"></table>
                    <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} className="nav">Home</NavLink>
                </div>
            </div>
        </div>
    )
}