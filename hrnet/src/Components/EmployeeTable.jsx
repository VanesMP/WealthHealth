import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "./SearchBar";
import { Paper, Table, TableContainer } from "@mui/material";
import TableHeadEmployee from "./TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";

//utilisation de la librairie day.js pour obtenir le bon format de sortie de la date
const dayjs = require("dayjs");

/**Render data table employees
 * @funtion EmployeeTable
 * @returns {JSX}
 */
export default function EmployeeTable() {
  
  //récuperation de la liste des employées depuis le store
  const globalStateEmployees = useSelector((state) => state.globalState);
  
  //initialisation du state list employees
  const [rows, setRows] = useState(globalStateEmployees.employees);
  
  //init state for sort by columns
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState([]); //default value
  //methode appliquer sur chaque element du tableHead pour trier les colonnes
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
    return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  
  //initialisation du state pour la pagination
  const [page, setPage] = useState(0);
  //initialisation du state pour le nombre d' employee par page
  const [rowsPerPage, setRowsPerPage] = useState(5);

 //methode pour le changement de page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
//methode pour changer le nombre d'employees par page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

//méthode pour effectuer une recherche dans le tableaux
  const researchEmployee = (valueSearch) => {
    let value = valueSearch.toLowerCase();
    let findEmployee = globalStateEmployees.employees.filter((row) => {
      return (
        row.firstName.toLowerCase().includes(value) ||
        row.lastName.toLowerCase().includes(value) ||
        row.city.toLowerCase().includes(value) ||
        row.dateOfBirth.includes(valueSearch) ||
        row.department.toLowerCase().includes(value) ||
        row.startDate.includes(valueSearch) ||
        row.state.toLowerCase().includes(value) ||
        row.street.toLowerCase().includes(value) ||
        row.zipCode.includes(valueSearch)
      );
    });
    setRows(findEmployee);
  };

  return (
    <Paper elevation={3}>
      <SearchBar researchEmployee={researchEmployee} />
      <TableContainer>
        <Table>
          <TableHeadEmployee
            order={order}
            onRequestSort={handleRequestSort}
            orderBy={orderBy}
            rowCount={rows.length}
          />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort(getComparator(order, orderBy))
              .map((employee, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{employee.firstName}</TableCell>
                    <TableCell>{employee.lastName}</TableCell>
                    <TableCell>
                      {dayjs(employee.startDate).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>
                      {dayjs(employee.dateOfBirth).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>{employee.street}</TableCell>
                    <TableCell>{employee.city}</TableCell>
                    <TableCell>{employee.state}</TableCell>
                    <TableCell>{employee.zipCode}</TableCell>
                  </TableRow>
                );
              })}
            {rows.length <= 0 && (
              <TableRow>
                <TableCell colSpan={9}>
                  <p className="notFound">" No matching records found "</p>
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
  );
}

