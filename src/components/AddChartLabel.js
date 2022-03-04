import React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddChartLabel = (props) => {
  const [values, setValues] = React.useState({
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleAddChartLabelClick = () => {
    setValues({ ...values });
  };

  return (
    <FormControl sx={{ m: 1, width: "48ch" }} variant="standard">
      <InputLabel style={{ fontSize: "1em" }}>
        Add a category to the chart
      </InputLabel>
      <Input
        type="text"
        value={values.password}
        onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="add icon"
              onClick={handleAddChartLabelClick}
            >
              <AddCircleIcon
                style={{ fontSize: "0.8em", marginBottom: "10px" }}
              />
            </IconButton>
            <IconButton
              aria-label="cancel icon"
              onClick={() => props.hide(false)}
            >
              <CancelIcon style={{ fontSize: "0.8em", marginBottom: "10px" }} />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default AddChartLabel;
