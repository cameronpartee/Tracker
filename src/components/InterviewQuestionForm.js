import React from "react";
import DropdownControl from "./DropdownControl";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const InterviewQuestionForm = ({ tableData, setTableData }) => {
  const [newTableData, setNewTableData] = useState([]);
  const [newData, setNewData] = useState({});

  useEffect(() => {
    if (newTableData.some((data) => data.name === newData.name)) {
      setNewTableData((prevTableData) =>
        prevTableData.filter((data) => data.name !== newData.name)
      );
    }
    setNewTableData((prevTableData) => [...prevTableData, newData]);
  }, [newData]);

  const addToDataBuckets = () => {
    if (!newTableData[0].name) {
      newTableData.splice(0, 1);
    }
    let updatedTableData = [...tableData];
    for (let i = 0; i < updatedTableData.length; i++) {
      let temp = newTableData[i].completed;
      updatedTableData[i].completed += temp;
      updatedTableData[i].total += temp;
    }
    setTableData(updatedTableData);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <DropdownControl name={tableData[0].name} newTableData={setNewData} />
      <DropdownControl name={tableData[1].name} newTableData={setNewData} />
      <DropdownControl name={tableData[2].name} newTableData={setNewData} />

      <Button
        style={{ height: "35px" }}
        variant="contained"
        size="small"
        onClick={addToDataBuckets}
      >
        Submit
      </Button>
    </div>
  );
};

export default InterviewQuestionForm;
