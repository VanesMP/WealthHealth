import { NavLink } from "react-router-dom";
import EmployeeTable from "../Components/EmployeeTable";
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
            <div className="headerTitle">
            <Header/>
            </div>
            <div id="employee-div" className="containerTable">
                <div className="elementNavTable">
                    <NavLink to="/employees" style={({ isActive }) => isActive ? activeStyle : undefined} className="nav">Current Employees</NavLink>
                </div>
                <div className="dataTable">
                <EmployeeTable />
                </div>
                <div className="elementNavTable">
                    <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} className="nav">Home</NavLink>
                </div>
            </div>
        </div>
    )
}