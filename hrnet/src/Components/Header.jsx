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
        <Nav linkTo="/" text="Create Employee" />
        <Nav linkTo="/employees" text="View Current Employees" />
      </div>
    
    </div>
  );
}
