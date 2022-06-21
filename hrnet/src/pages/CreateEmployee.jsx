import Nav from "../Components/Nav";
import Header from "../Components/Header";
import Form from "../Components/Form";


/** Render to create new employee page
 * @function CreateEmployee
 * @returns {JSX}
 */

export default function CreateEmployee() {
  // let activeStyle = { textDecoration: "underline" };

  return (
    <div className="containerCreateEmployee">
      <Header />
      <div className="container">
        <div className="elementNav">
          <Nav linkTo="/" text="Create Employee" />
          <Nav linkTo="/employees" text="View Current Employees" />
        </div>
        <Form />
      </div>
    </div>
  );
}
