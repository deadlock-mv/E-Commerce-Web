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
import { products } from "../../data";
import ProductCard from "./ProductCard";
import DrawerComponent from "./DrawerComponent";
import DeleteModal from "./DeleteModal";

const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });

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

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    // Perform the delete action here
    console.log("Deleting product:", selectedProduct);
    handleCloseModal();
  };

  const onEdit = (product) => {
    setIsDrawerOpen(true); // Open the drawer when the edit button is clicked
    console.log(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.img,
    });
  };

  const handleisDrawerOpen = (state) => {
    setIsDrawerOpen(state);
  };

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
        <Button
          onClick={() => handleisDrawerOpen(true)}
          variant="contained"
          color="primary"
          // startIcon={<AddIcCallRounded />}
        >
          Add Item
        </Button>
      </div>

      <Box>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onDelete={handleOpenModal}
            onEdit={onEdit}
          />
        ))}
      </Box>

      <DrawerComponent
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        handleisDrawerOpen={handleisDrawerOpen}
        product={formData}
      />

      <DeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleDelete}
        product={selectedProduct}
      />
    </div>
  );
};

export default Products;
