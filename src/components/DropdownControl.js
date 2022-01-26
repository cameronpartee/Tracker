import React from "react";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const DropdownControl = ({ name, newTableData }) => {
  const [selectedValue, setSelectedValue] = useState(0);

  const updateDataTable = (e) => {
    setSelectedValue(e.target.value);
    newTableData({ name: name, completed: e.target.value });
  };

  return (
    <FormControl style={{ margin: "20px" }}>
      <InputLabel>{name}</InputLabel>
      <Select
        value={selectedValue}
        label={name}
        onChange={updateDataTable}
        style={{ width: "120px" }}
      >
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
        <MenuItem value={0}>None</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropdownControl;
