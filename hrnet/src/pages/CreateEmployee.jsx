import { Link } from "react-router-dom";
//import country from "../statesData.json"

/** Render to the create new employee page
 * @function CreateEmployee
 * @returns {JSX}
 */

export default function CreateEmployee() {

    //console.log(country)

    return(
        <div className="containerCreateEmployee">

{/* creer un composant header */}
            <div className="containerTitle">
                <h1 className="title">HRnet</h1>
            </div>
            
            <div className="container">
                <div className="elementNav">
                    <Link to="/employees"className="nav">📋 View Current Employees</Link>
                    <h2 className="nav">🖋 Create Employee</h2>
                </div>

                <form id="create-employee">
                    <fieldset className="fieldsetIdentity"> 
                        <legend>Identity</legend>
                            <label className="labelIdentity" htmlFor="firstName">
                                First Name 
                                <input type="text" name="firstName" />
                            </label>
                            <label className="labelIdentity" htmlFor="lastName">
                                Last Name 
                                <input type="text" name="lastName" />
                            </label>
                            <label className="labelIdentity" htmlFor="dateOfBirth">
                                Date of Birth 
                                <input type="text" name="dateOfBirth" />
                            </label>
                            <label className="labelIdentity" htmlFor="startDate">
                                Start Date 
                                <input type="text" name="startDate" />
                            </label>
                    </fieldset>  
                    <fieldset className="fieldsetAdress">
                        <legend>Address</legend>
                            <label htmlFor="street" className="street">
                                Street 
                                <input type="text" name="street" />
                            </label>
                            <label htmlFor="city" className="city">
                                City 
                                <input type="text" name="city" />
                            </label>

    {/* creer un composant select */}
                            <label htmlFor="state" className="state">
                                State 
                                <select name="state" id="state">
                                    {/* {country.map((countryItem) => (
                                        <option value={countryItem} className=""></option>
                                    ))} */}
                                </select>
                            </label>
                            <label htmlFor="zipCode" className="zipCode">
                                Zip Code 
                                <input type="number" name="zipCode" />
                            </label>
                    </fieldset>

{/* creer un composant select  */}
                        <fieldset className="fieldsetDepartment">
                            <legend>Department</legend>
                                <label htmlFor="department">
                                    <select name="department" id="department">
                                    <option value="sales">Sales</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="humanResources">Human Resources</option>
                                    <option value="legal">Legal</option>
                                    </select>
                                </label> 
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