import { useState } from 'react';
import {  useSelector } from 'react-redux';
// import dataEmployees from '../employeesData.json';
import { SearchBar } from './SearchBar';
import { Paper, Table, TableContainer } from '@mui/material';
import TableHeadEmployee from './TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';

const dayjs = require('dayjs')

/**Render data table employee
 * @funtion EmployeeTable
 * @param {object} props 
 * @returns {JSX} 
 */
export default function EmployeeTable (props) {

    // const dispatch =useDispatch()

//method for sort column
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
        return -1;
        }
        if (b[orderBy] > a[orderBy]) {
        return 1;
        }
        return 0;
    }
  
    function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }

//init state for pagination + number of rows(employee) per pages
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const globalStateEmployees = useSelector ((state) => state.globalState)
    console.log("globalState", globalStateEmployees.employees)
    // const newOne = globalStateEmployees.employees[globalStateEmployees.employees.length -1]
    // console.log("newOne", newOne)

//init state for employees
    const [rows, setRows] = useState(globalStateEmployees.employees)

    const researchEmployee = (valueSearch) => {
        console.log(valueSearch)
        let value = valueSearch.toLowerCase()
        let findEmployee = globalStateEmployees.employees
        .filter((row) => { return row.firstName.toLowerCase().includes(value)
        || row.lastName.toLowerCase().includes(valueSearch)
        || row.city.includes(valueSearch)
        || row.dateOfBirth.includes(valueSearch)
        || row.department.includes(valueSearch)
        || row.startDate.includes(valueSearch)
        || row.state.includes(valueSearch)
        || row.street.includes(valueSearch)
        || row.zipCode.includes(valueSearch)
        })
            console.log(findEmployee)
            setRows(findEmployee)
        if(valueSearch.length === 0){
            console.log('hello', rows.length)
            setRows(globalStateEmployees.employees)          
        } 
   }

//init state for sort by columns
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState([]);//default value

    const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    };


    return(
        <Paper elevation={3}>
            <SearchBar researchEmployee={researchEmployee} />
            <TableContainer>
                <Table>
                    <TableHeadEmployee order={order} onRequestSort={handleRequestSort} orderBy={orderBy} rowCount={rows.length}/>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .sort(getComparator(order, orderBy))
                        .map((employee, index) => {
                            return (
                            <TableRow key={index}>
                                <TableCell>
                                    {employee.firstName}
                                </TableCell>
                                <TableCell>
                                    {employee.lastName}
                                </TableCell>
                                <TableCell>
                                    {dayjs(employee.startDate).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell>
                                    {employee.department}
                                </TableCell>
                                <TableCell>
                                    {dayjs(employee.dateOfBirth).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell>
                                    {employee.street}
                                </TableCell>
                                <TableCell>
                                    {employee.city}
                                </TableCell>
                                <TableCell>
                                    {employee.state}
                                </TableCell>
                                <TableCell>
                                    {employee.zipCode}
                                </TableCell>
                            </TableRow>
                            );
                        })}
                        {rows.length <= 0 && (
                            <TableRow>
                                <TableCell colSpan={9}>
                                    <p className='notFound'>" No matching records found "</p>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer> 
            <TablePagination
                rowsPerPageOptions={[5, 25, 50, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}