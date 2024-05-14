import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import styled from "styled-components";
import ProductsList from "./ProductsList";

const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

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

  const Box = styled.div`
    display: flex;
    justify-content: center;
    overflow-y: auto;
    height: 60vh;
    width: 80%;
    border: 2px solid #fd9b9b37;
    border-radius: 4px;
  `;

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
          <InputLabel id="select-label">Category</InputLabel>
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
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
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

      <Box>
        Products Cards
        <ProductsList 
          products={[{img: "", name: "p1", category: "c1", price:"$299"}]}
        />
      </Box>
    </div>
  );
};

export default Products;
