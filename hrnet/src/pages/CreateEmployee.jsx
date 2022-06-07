import { Link } from "react-router-dom";
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

    return(
        <div className="containerCreateEmployee">
            <Header />
            <div className="container">
                <div className="elementNav">
                    <Link to="/employees"className="nav">📋 View Current Employees</Link>
                    <h2 className="nav">🖋 Create Employee</h2>
                </div>

                <form id="create-employee">
                    <fieldset className="fieldsetIdentity"> 
                        <legend>Identity</legend>
                            <Input title="First Name" attribut="firstName" type="text" />
                            <Input title="Last Name" attribut="lastName" type="text" />
                            <Input title="Date of Birth" attribut="dateOfBirth" type="text" />
                            <Input title="Start Date" attribut="startDate" type="text" />
                    </fieldset>  
                    <fieldset className="fieldsetAdress">
                        <legend>Address</legend>
                            <Input title="Street" attribut="street" type="text" />
                            <Input title="City" attribut="city" type="text" />

    {/* creer un composant select */}
                            <Select attribut="state" title="State" data={dataSate.country} />
                            {/* <label htmlFor="state" className="state">
                                State 
                                <select name="state" id="state">
                                    <option value="sales">Sales</option>
                                    <option value="marketing">Marketing</option> */}
                                    
                            <Input title="Zip Code" attribut="zipCode" type="number" />
                    </fieldset>

                    <fieldset className="fieldsetDepartment">
                        <legend>Department</legend>
                            <Select attribut="department" title=" " data={dataDepartments.departements} />
                    </fieldset>                      
                </form>

                <button className="btnSave">
                    <span className="save">Save</span> 
                </button>
            </div>

            {/* <div id="confirmation" className="modal">Employee Created!</div> */}
        </div>
    )
}