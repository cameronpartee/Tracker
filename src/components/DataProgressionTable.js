import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

const DataProgressionTable = ({ tableData }) => {
  return (
    <div style={{ width: "500px", display: "flex", justifyContent: "center" }}>
      <TableContainer
        style={{ width: "40%" }}
        component={Paper}
        variant="outlined"
      >
        <Table aria-label="demo table">
          <TableHead>
            <TableRow>
              <TableCell>{tableData[0].name}</TableCell>
              <TableCell>{`${tableData[0].completed}/${tableData[0].total}`}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{tableData[1].name}</TableCell>
              <TableCell>{`${tableData[1].completed}/${tableData[1].total}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{tableData[2].name}</TableCell>
              <TableCell>{`${tableData[2].completed}/${tableData[2].total}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataProgressionTable;
