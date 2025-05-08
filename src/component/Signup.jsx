// import React, { useState } from "react";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { Container, Paper, Typography, Button, TextField, Box, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const Signup = ({ handleClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Signup Data:", formData);
//   //   handleClose(); // Close modal on form submit
//   // };  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:3000/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (!res.ok) {
//         throw new Error('Signup failed');
//       }
  
//       const data = await res.json();
//       console.log('Signup Success:', data);
//       handleClose(); // Close modal on successful signup
//     } catch (error) {
//       console.error('Error during signup:', error);
//     }
//   };
  
//  const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       const { credential } = credentialResponse;
//       console.log("Google Credential Token:", credential);
  
//       const res = await fetch("http://localhost:3000/auth/google_oauth2", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ id_token: credential }),
//       });
  
//       const data = await res.json();
//       console.log("Backend Response:", data);
//       handleClose();
//     } catch (error) {
//       console.error("Error sending token to backend:", error);
//     }
//   };
  

//   const handleGoogleFailure = (error) => {
//     console.error("Google login failed:", error);
//   };
//   const clientId = "997918727226-ip6c50q0b52fbt08rqvu11pu9j16hkg4.apps.googleusercontent.com"

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <Container maxWidth="">
//         <Paper elevation={3} sx={{ padding: 3, position: "relative" }}>
//           {/* Close Button */}
//           <IconButton
//             onClick={handleClose}
//             sx={{ position: "absolute", top: 10, right: 10 }}
//           >
//             <CloseIcon />
//           </IconButton>

//           <Typography variant="h5" align="center" gutterBottom>
//             Signup
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               margin="normal"
//               required
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 2,backgroundColor: "#9b51e0" }}>
//               Signup
//             </Button>
//           </form>

//           <Box sx={{ textAlign: "center", mt: 2 }}>
//             <Typography variant="body2">Or signup with Google</Typography>
//             <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
//           </Box>
//         </Paper>
//       </Container>
//     </GoogleOAuthProvider>
//   );
// };

// export default Signup;


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
  InputAdornment
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = ({ handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const clientId =
    "997918727226-ip6c50q0b52fbt08rqvu11pu9j16hkg4.apps.googleusercontent.com";

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    fid: Yup.string().required("FID number is required"),
    gender: Yup.string().required("Gender is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
      .required("Phone number is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      fid: "",
      gender: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          throw new Error("Signup failed");
        }

        const data = await res.json();
        console.log("Signup Success:", data);
        handleClose();
      } catch (error) {
        console.error("Error during signup:", error);
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
      handleClose();
    } catch (error) {
      console.error("Error sending token to backend:", error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed:", error);
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
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              margin="normal"
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
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
          </Box>
        </Paper>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default Signup;
