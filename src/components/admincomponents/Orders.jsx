import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import styled from "styled-components";
import OrdersTable from './OrdersTable';


const Orders = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const Box = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-y: auto;
    flex-wrap: wrap;
    height: 60vh;
    width: 80%;
    border: 2px solid #fd9b9b37;
    border-radius: 4px;
    background-color: #754d4d63;
    padding: inherit;
  `;

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleReset = () => {
    setSearchValue("");
    setSelectedOption("");
  };

  return (
    <div className="admin-container">
      <div className="header">
        <TextField
          style={{ width: "40vh" }}
          className="searchField"
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <FormControl variant="outlined" className="selectField">
          <InputLabel id="select-label">Status</InputLabel>
          <Select
            style={{ width: "20vh" }}
            labelId="select-label"
            value={selectedOption}
            onChange={handleSelectChange}
            label="Select"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="P">Pending</MenuItem>
            <MenuItem value="C">Completed</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleReset}
          className="resetButton"
        >
          Reset
        </Button>
        </div>

        {/* <Box> */}
          <OrdersTable />
        {/* </Box> */}
    </div>
  )
}

export default Orders