import React from "react";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const DropdownControl = ({ name, getIncrement }) => {
  const [increment, setIncrement] = useState(0);

  const updateIncrementer = (event) => {
    setIncrement(event.target.value);
    getIncrement(event.target.value);
  };

  return (
    <FormControl style={{ margin: "20px" }}>
      <InputLabel id="select-label">{name}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={increment}
        label={name}
        onChange={updateIncrementer}
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
