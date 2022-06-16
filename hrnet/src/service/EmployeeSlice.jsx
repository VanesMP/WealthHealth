import { createSlice } from '@reduxjs/toolkit';
import dataEmployees from "../employeesData.json"

export const initialState = {
    employees: 
        dataEmployees.employees
}

const EmployeeSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
      AddEmployee: (state, action) => {
        console.log('in')
        state.employees = [...state.employees, {
            firstName:action.payload.firstName,
            lastName:action.payload.lastName,
            startDate:action.payload.startDate,
            department:action.payload.department,
            dateOfBirth:action.payload.dateOfBirth,
            street:action.payload.street,
            city:action.payload.city,
            state:action.payload.state,
            zipCode:action.payload.zipCode
        }]
      }}
    })
  
  
  export const reducer = EmployeeSlice.reducer;
  export const {
    AddEmployee
  } = EmployeeSlice.actions;
//export const selectEmployees = (state) = state.globalState.employees
  export default EmployeeSlice.reducer
