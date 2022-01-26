import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import { buckets } from "./data/data";
import { useState } from "react";
import DropdownControl from "./components/DropdownControl";

function App() {
  const [tableData, setTableData] = useState(buckets);
  const [addition, setAddition] = React.useState(0);

  return (
    <div>
      <div>
        <h1>Good morning Cameron</h1>
        <div>How many interview questions have you completed today?</div>
        {/* Lets add a positive word api here lol */}
        <DropdownControl name={tableData[0].name} getIncrement={setAddition} />
        <DropdownControl name={tableData[1].name} getIncrement={setAddition} />
        <DropdownControl name={tableData[2].name} getIncrement={setAddition} />
        <TableContainer
          style={{ width: "25%" }}
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
    </div>
  );
}

export default App;

// Lets use material ui, work on the structure and design of this app -> ok thank you
