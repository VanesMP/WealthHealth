import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import Fieldset from "../Components/Fieldset";
import { Input } from "../Components/Input";
import { DatePicker } from "./DatePicker";
import Select from "../Components/Select";
//import Modal from "./Modal";
import dataDepartments from "../departmentOption.json";
import dataState from "../statesData.json";
// import { initialState } from '../service/EmployeeSlice';
import { AddEmployee } from "../service/EmployeeSlice";

/**Render form for create a new employee
 * @function From
 * @returns {JSX}
 */

export default function Form() {
  const dispatch = useDispatch();

  //init state for an employee
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  //utilisation de react-hook-form pour recuperer la saisie utilisatuer, valider le form. sans erreur et effacer les entrees apres validation.
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: employee,
  });
  //save in state information employee from the form
  function saveEmployee() {
    setEmployee({
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      dateOfBirth: getValues("dateOfBirth"),
      startDate: getValues("startDate"),
      street: getValues("street"),
      city: getValues("city"),
      state: getValues("state"),
      zipCode: getValues("zipCode"),
      department: getValues("department"),
    });
    console.log("employee", employee);
  }

  const onSubmit = (data) => {
    console.log("data form", data);
    console.log("employee", employee);
    modalElement.current.style.display = "block";
    console.log("employee", employee);
    dispatch(AddEmployee(employee));
  };

  const globalStateEmployees = useSelector((state) => state.globalState);
  console.log(globalStateEmployees.employees);
  console.log(employee);

  //gestion ouverture et fermeture de la modal
  const buttonOpen = useRef(null);
  const modalElement = useRef(null);

  // const close = () => {
  //     modalElement.current.style.display = "none";
  //     reset();
  // }

  return (
    <div>
      <form id="createEmployee" onSubmit={handleSubmit(onSubmit)}>
        <Fieldset title="Identity" attribut="fieldsetIdentity">
          <Input
            htmlFor="firstName"
            className="firstName"
            title="First Name"
            type="text"
            id="firstName"
            name="firstName"
            register={register}
            required
            errors={errors.firstName}
          />
          <Input
            htmlFor="lastName"
            className="lastName"
            title="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            register={register}
            required
            errors={errors.lastName}
          />
          <DatePicker
            htmlFor="dateOfBirth"
            className="dateOfBirth"
            title="Date of Birth"
            type="date"
            name="dateOfBirth"
            register={register}
            required
            errors={errors.dateOfBirth}
          />
          <DatePicker
            htmlFor="startDate"
            className="startDate"
            title="Start Date"
            type="date"
            name="startDate"
            register={register}
            required
            errors={errors.startDate}
          />
        </Fieldset>

        <Fieldset title="Address" attribut="fieldsetAdress">
          <Input
            htmlFor="street"
            className="street"
            title="Street"
            type="text"
            id="street"
            name="street"
            register={register}
            required
            errors={errors.street}
          />
          <Input
            htmlFor="city"
            className="city"
            title="City"
            type="text"
            id="city"
            name="city"
            register={register}
            required
            errors={errors.city}
          />
          <Select
            htmlFor="state"
            className="state"
            title="State"
            name="state"
            value="state"
            register={register}
            required
            options={dataState.states}
            errors={errors.state}
          />
          <Input
            htmlFor="zipCode"
            className="zipCode"
            title="Zip Code"
            type="number"
            id="zipCode"
            name="zipCode"
            register={register}
            required
            errors={errors.zipCode}
          />
        </Fieldset>

        <Fieldset title="Department" attribut="fieldsetDepartment">
          <Select
            htmlFor="department"
            className="department"
            title="Department"
            name="department"
            value="department"
            register={register}
            required
            options={dataDepartments.departements}
            errors={errors.department}
          />
        </Fieldset>

        <button
          form="createEmployee"
          className="btnSave"
          type="submit"
          ref={buttonOpen}
          onClick={saveEmployee}
        >
          Save
        </button>
      </form>

      <div ref={modalElement} className="modal">
        {/* <Modal modalElement={modalElement}  buttonOpen={buttonOpen}>
                            <p className="textModal">Employee Created! </p>
                            <button type="button" className="btnClose" onClick={close}>X</button>
                        </Modal> */}
      </div>
    </div>
  );
}
