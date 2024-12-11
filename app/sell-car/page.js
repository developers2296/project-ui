"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  MenuItem,
} from "@mui/material";
import { storeCarDetails } from "../utils/api";

export default function SellCarPage() {
  const [carDetails, setCarDetails] = useState({
    model: "",
    price: "",
    phone: "",
    city: "",
  });
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async () => {
    try {
      const response = await storeCarDetails(carDetails, images);
      if(response.metadata.success){
        alert("Car details stored successfully!");
      } else {
        setError(response.metadata.message)
      }
      

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Sell Your Car
        </Typography>
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <TextField
          fullWidth
          margin="normal"
          label="Model"
          name="model"
          variant="outlined"
          value={carDetails.model}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Price"
          name="price"
          type="number"
          variant="outlined"
          value={carDetails.price}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone"
          name="phone"
          variant="outlined"
          value={carDetails.phone}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          select
          margin="normal"
          label="City"
          name="city"
          value={carDetails.city}
          onChange={handleInputChange}
        >
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="Los Angeles">Los Angeles</MenuItem>
          <MenuItem value="Chicago">Chicago</MenuItem>
          <MenuItem value="Houston">Houston</MenuItem>
        </TextField>
        <input
          type="file"
          multiple
          name="attachments"
          onChange={handleImageChange}
          style={{ margin: "20px 0" }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
}
