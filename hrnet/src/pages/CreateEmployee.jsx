import { NavLink } from "react-router-dom";
import Fieldset from "../Components/Fieldset";
import Header from "../Components/Header";
import Input from "../Components/Input";
import Select from "../Components/Select";
import dataDepartments from "../departmentOption.json"
import dataSate from "../statesData.json"

/** Render to the create new employee page
 * @function CreateEmployee
 * @returns {JSX}
 */

export default function CreateEmployee() {

    let activeStyle = {
        textDecoration: "underline"
      };

    return(
        <div className="containerCreateEmployee">
            <Header />
            <div className="container">
                <div className="elementNav">
                    <NavLink to="/"className="nav"  style={({ isActive }) => isActive ? activeStyle : undefined} >🖋 Create Employee</NavLink>
                    <NavLink to="/employees"className="nav" style={({ isActive }) => isActive ? activeStyle : undefined} >📋 View Current Employees</NavLink>
                </div>

                <form id="create-employee">
                    <Fieldset title="Identity" attribut="fieldsetIdentity">
                        <Input title="First Name" attribut="firstName" type="text" />
                        <Input title="Last Name" attribut="lastName" type="text" />
                        <Input title="Date of Birth" attribut="dateOfBirth" type="text" />
                        <Input title="Start Date" attribut="startDate" type="text" />
                    </Fieldset> 

                    <Fieldset title="Address" attribut="fieldsetAdress">
                        <Input title="Street" attribut="street" type="text" />
                        <Input title="City" attribut="city" type="text" />
                        <Select attribut="state" title="State" data={dataSate.country} />        
                        <Input title="Zip Code" attribut="zipCode" type="number" />
                    </Fieldset>

                    <Fieldset title="Department" attribut="fieldsetDepartment">
                        <Select attribut="department" title=" " data={dataDepartments.departements} />
                    </Fieldset>                      
                </form>

                <button className="btnSave">
                    <span className="save">Save</span> 
                </button>
            </div>

            {/* <div id="confirmation" className="modal">Employee Created!</div> */}
        </div>
    )
}