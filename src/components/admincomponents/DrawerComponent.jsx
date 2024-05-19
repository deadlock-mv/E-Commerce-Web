import React, { useEffect, useState } from "react";
import {
  Button,
  Drawer,
  TextField,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const DrawerComponent = ({
  isDrawerOpen,
  setIsDrawerOpen,
  handleisDrawerOpen,
  product = {},
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: undefined,
    image: null,
  });

  useEffect(() => {
    setFormData({
      name: product?.name || "",
      category: product?.category || "",
      price: product?.price || undefined,
      image: product?.image || null,
    });
  },[product]);

  console.log("drawer", product, formData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      image: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., submit data to backend
    console.log(formData);
    // Close the drawer after submitting the form
    setIsDrawerOpen(false);
    // Reset form data
    setFormData({
      name: "",
      category: "",
      price: "",
      image: null,
    });
  };

  const handleCloseDrawer = () => {
    // Reset form data when drawer is closed
    setFormData({
      name: "",
      category: "",
      price: "",
      image: null,
    });
    // Close the drawer
    handleisDrawerOpen(false);
  };

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer}>
      <div className="drawerContent">
        <h2
          style={{
            backgroundColor: "#7fb4f1",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {product?.name?.length > 0 ? "Edit Item" : "Add New Item"}
        </h2>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="category"
            label="Category"
            value={formData.category}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel style={{ marginBottom: "2vh" }}>Image</InputLabel>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </FormControl>
          {formData?.image ? (
            <div style={{ width: "20vh", height: "15vh", marginTop: "15px" }}>
              <img
                src={product? formData.image : URL.createObjectURL(formData.image)}
                className="productImage"
              />
            </div>
          ) : (
            ""
          )}
          <Button
            style={{ marginTop: "2vh" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
