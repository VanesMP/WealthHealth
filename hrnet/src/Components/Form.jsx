import React from 'react';
// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import Fieldset from "../Components/Fieldset";
import { Input } from "../Components/Input";
import Select from "../Components/Select";
import Modal from "./Modal";
import dataDepartments from "../departmentOption.json";
import dataState from "../statesData.json";

/**Render form for create a new employee
 * @function From
 * @returns {JSX}
 */

export default function Form() {

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful  }, reset } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            startDate: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            department: ''
    }}); 
    const onSubmit = (data =>{ 
        console.log( data);
        if (isSubmitSuccessful) {
            modalElement.current.style.display = "block"
        }
    });

    const buttonOpen =useRef(null);
    const modalElement = useRef(null);
    console.log(buttonOpen, modalElement)

    const close = () => {
        modalElement.current.style.display = "none";
        reset();
    }

    return (
        <div>
            <form id="createEmployee"  onSubmit={handleSubmit(onSubmit)}>
                    <Fieldset title="Identity" attribut="fieldsetIdentity">
                        <Input htmlFor='firstName' className='firstName' title='First Name' type='text' id='firstName' input='firstName' 
                            register={register} required errors={errors.firstName}/>
                        <Input htmlFor='lastName' className='lastName' title='Last Name' type='text' id='lastName' input='lastName' 
                            register={register} required errors={errors.lastName}/>
                        <Input htmlFor='dateOfBirth' className='dateOfBirth' title='Date of Birth' type='text' id='dateOfBirth' input='dateOfBirth' 
                            register={register} required errors={errors.dateOfBirth}/>
                        <Input htmlFor='startDate' className='startDate' title='Start Date' type='text' id='startDate' input='startDate' 
                            register={register} required errors={errors.startDate}/>
                    </Fieldset> 

                    <Fieldset title="Address" attribut="fieldsetAdress">
                        <Input htmlFor='street' className='street' title='Street' type='text' id='street' input='street' 
                            register={register} required errors={errors.street}/>
                        <Input htmlFor='city' className='city' title='City' type='text' id='city' input='city' 
                            register={register} required errors={errors.city}/>
                        <Select htmlFor="state" className='state' title="State" name='state' value='state'
                            register={register} required options={dataState.states} errors={errors.state}/>        
                        <Input htmlFor='zipCode' className='zipCode' title='Zip Code' type='number' id='zipCode' input='zipCode' 
                            register={register} required errors={errors.zipCode}/>
                    </Fieldset>

                    <Fieldset title="Department" attribut="fieldsetDepartment">
                        <Select htmlFor="department" className='department' title="Department"name='department' value='department'
                            register={register} required options={dataDepartments.departements} errors={errors.department}/>
                    </Fieldset>                      

                    <button form="createEmployee" className="btnSave" type='submit' ref={buttonOpen} >Save</button>
                </form>

                    <div ref={modalElement} className="modal">
                        <Modal modalElement={modalElement}  buttonOpen={buttonOpen}>
                            <p className="textModal">Employee Created! </p>
                            <button type="button" className="btnClose" onClick={close}>X</button>
                        </Modal>
                    </div>
        </div>
    )
}