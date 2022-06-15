import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import  TableSortLabel  from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

//Label column
export const columnsHeader =[
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    { id: 'startDate', label: 'Start Date' },
    { id: 'department', label: 'Department' },
    { id: 'dateOfBirth', label: 'Date of Birth' },
    { id: 'street', label: 'Street' },
    { id: 'city', label: 'City' },
    { id: 'state', label: 'State' },
    { id: 'zipCode', label: 'Zip Code' }
]

/**Render TableHead for data table employee
 * @function TableHeadEmployee
 * @param {object} props 
 * @returns {JSX}
 */
export default function TableHeadEmployee(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    }

    return(
        <TableHead >
            <TableRow>
                {columnsHeader.map((column) => (
                    <TableCell className='tableCell' key={column.id} 
                            sortDirection={orderBy === column.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === column.id}
                            direction={orderBy === column.id ? order : 'asc'}
                            onClick={createSortHandler(column.id)}>
                        {column.label}
                            {orderBy === column.id ? (
                                <Box component="span" className='arrow' sx={visuallyHidden}>
                                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                            </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>

    )
}