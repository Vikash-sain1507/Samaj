// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   IconButton,
//   InputAdornment,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const Login = ({ handleClose }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string()
//       .min(6, "Minimum 6 characters")
//       .required("Password is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const res = await fetch("http://localhost:3000/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });

//         const data = await res.json();

//         if (!res.ok || data.error) {
//           throw new Error(data.error || "Login failed");
//         }

//         // If login successful
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userId", data.user.id);

//         setSnackbar({
//           open: true,
//           message: "Login successful!",
//           severity: "success",
//         });

//         setTimeout(() => {
//           handleClose?.();
//         }, 2000);
//       } catch (err) {
//         console.error("Login error:", err.message);
//         setSnackbar({
//           open: true,
//           message: "Login failed: " + err.message,
//           severity: "error",
//         });
//       }
//     },
//   });

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ padding: 4, position: "relative" }}>
//         <IconButton
//           onClick={handleClose}
//           sx={{ position: "absolute", top: 10, right: 10 }}
//         >
//           <CloseIcon />
//         </IconButton>

//         <Typography variant="h5" align="center" gutterBottom>
//           Login
//         </Typography>

//         <form onSubmit={formik.handleSubmit}>
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email && formik.errors.email}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Password"
//             type={showPassword ? "text" : "password"}
//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//             margin="normal"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     onClick={() => setShowPassword(!showPassword)}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 2, backgroundColor: "#9b51e0" }}
//           >
//             Login
//           </Button>
//         </form>
//       </Paper>

//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={4000}
//         onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert
//           onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
//           severity={snackbar.severity}
//           sx={{ width: "300px" }}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default Login;

import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = ({ handleClose }) => {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok || data.error) {
          throw new Error(data.error || "Login failed");
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id);

        setSnackbar({
          open: true,
          message: "Login successful!",
          severity: "success",
        });

        setTimeout(() => {
          handleClose?.();
        }, 2000);
      } catch (err) {
        console.error("Login error:", err.message);
        setSnackbar({
          open: true,
          message: "Login failed: " + err.message,
          severity: "error",
        });
      }
    },
  });

  const handleForgotPassword = () => {
   navigate("/forgetpassword"); 
    setSnackbar({
      open: true,
      message: "Redirect to forgot password screen (not implemented)",
      severity: "info",
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, position: "relative" }}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <form onSubmit={formik.handleSubmit}>
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
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
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

          <Typography
            variant="body2"
            sx={{ textAlign: "right", mt: 1, mb: 2 }}
          >
            <Link
              component="button"
              variant="body2"
              onClick={handleForgotPassword}
              underline="hover"
              sx={{ color: "#9b51e0" }}
            >
              Forgot Password?
            </Link>
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#9b51e0" }}
          >
            Login
          </Button>
        </form>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: "300px" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
