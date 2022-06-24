import Nav from "../Components/Nav";

/**Render logo
 * @function Header
 * @returns {JSX}
 */

export default function Header() {
  return (
    <div className="header">
      <div className="containerTitle">
        <h1 className="title">HRnet</h1>
      </div>
      <div className="elementNav">
        <Nav linkTo="/wealthhealth/" text="Create Employee" />
        <Nav linkTo="/wealthhealth/employees" text="View Current Employees" />
      </div>
    
    </div>
  );
}
