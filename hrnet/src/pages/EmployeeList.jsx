import Nav from "../Components/Nav";
import EmployeeTable from "../Components/EmployeeTable";
import Header from "../Components/Header";

/**Render to see all the employees
 * @function EmployeeList
 * @returns {JSX}
 */

export default function EmployeeList() {
  
  return (
    <div>
      <div className="headerTitle">
        <Header />
      </div>
      <div className="containerTable">
        <div>
          <Nav linkTo="/employees" text="Current Employees" />
        </div>
        <div className="dataTable">
          <EmployeeTable />
        </div>
        <div>
          <Nav linkTo="/" text="Home" />
        </div>
      </div>
    </div>
  );
}
