"use client";

import React, { useState } from "react";
import { TextField, Button, Typography, Container, Paper } from "@mui/material";
import { loginUser } from "../utils/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email field is required.");
      return;
    }

    if (!password.trim()) {
      setError("Password field is required.");
      return;
    }

    try {
      const data = await loginUser({ email, password });
      localStorage.setItem("authToken", data.payload.token);
      router.push("/sell-car");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
}