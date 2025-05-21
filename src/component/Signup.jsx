import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  Box,
  IconButton,
  MenuItem,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = ({ handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const clientId =
    "997918727226-ip6c50q0b52fbt08rqvu11pu9j16hkg4.apps.googleusercontent.com";

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const payload = {
          name: values.name,
          email: values.email,
          gender: values.gender,
          full_phone_number: `+91${values.phone}`,
          password: values.password,
        };

        const res = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(errorText || "Signup failed");
        }

        const data = await res.json();
        console.log("Signup Success:", data);

        setSnackbar({
          open: true,
          message: "Signup successful!",
          severity: "success",
        });

        // Automatically close after 3 seconds
        setTimeout(() => {
          setSnackbar((prev) => ({ ...prev, open: false }));
          handleClose(); // close modal after showing success
        }, 3000);
      } catch (error) {
        console.error("Error during signup:", error);
        setSnackbar({
          open: true,
          message: "Signup failed: " + error.message,
          severity: "error",
        });
      }
    },
  });

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const res = await fetch("http://localhost:3000/auth/google_oauth2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_token: credential }),
      });

      const data = await res.json();
      console.log("Backend Response:", data);
      setSnackbar({
        open: true,
        message: "Google signup successful!",
        severity: "success",
      });

      setTimeout(() => {
        setSnackbar((prev) => ({ ...prev, open: false }));
        handleClose();
      }, 3000);
    } catch (error) {
      console.error("Error sending token to backend:", error);
      setSnackbar({
        open: true,
        message: "Google signup failed",
        severity: "error",
      });
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed:", error);
    setSnackbar({
      open: true,
      message: "Google login failed",
      severity: "error",
    });
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" align="center" gutterBottom>
            Signup
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
            />
            <TextField
              select
              fullWidth
              label="Gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
              margin="normal"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formik.values.phone}
              onChange={(e) => {
                const cleaned = e.target.value.replace(/\D/g, "");
                formik.setFieldValue("phone", cleaned);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.password && Boolean(formik.errors.password)
              }
              helperText={formik.touched.password && formik.errors.password}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#9b51e0" }}
            >
              Signup
            </Button>
          </form>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="body2">Or signup with Google</Typography>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </Box>
        </Paper>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default Signup;
