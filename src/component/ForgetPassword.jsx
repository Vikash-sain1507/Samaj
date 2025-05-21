// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Link,
//   Snackbar,
//   Alert,
//   Box,
// } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useNavigate } from "react-router-dom";

// function ForgetPassword() {
//   const [email, setEmail] = useState("");
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       setSnackbar({
//         open: true,
//         message: "Please enter your email.",
//         severity: "warning",
//       });
//       return;
//     }

//     // Send POST request to backend
//     try {
//       const res = await fetch("http://localhost:3000/forgot-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (!res.ok || data.error) {
//         throw new Error(data.error || "Failed to send reset instructions");
//       }

//       setSnackbar({
//         open: true,
//         message: "Reset instructions sent!",
//         severity: "success",
//       });
//     } catch (err) {
//       setSnackbar({
//         open: true,
//         message: "Error: " + err.message,
//         severity: "error",
//       });
//     }
//   };
//    const navigate = useNavigate();

//   return (
//     <Container maxWidth="sm">
//          <Button
//         startIcon={<ArrowBackIcon />}
//         onClick={() => navigate(-1)}
//         sx={{ margin: 2, color: "#9b51e0" }}
//       >
//         Back
//       </Button>
//       <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
//         <Typography variant="h5" fontWeight={600} gutterBottom>
//           Forgot password?
//         </Typography>

//         <Typography variant="body2" color="text.secondary" mb={3}>
//           No worries, we'll send you reset instructions.
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Enter your email"
//             variant="standard"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{
//               mt: 3,
//               backgroundColor: "#000",
//               color: "#fff",
//               fontWeight: "bold",
//               textTransform: "none",
//               "&:hover": { backgroundColor: "#333" },
//             }}
//           >
//             Reset password
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
// }

// export default ForgetPassword;

import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setSnackbar({
        open: true,
        message: "Please enter your email.",
        severity: "warning",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send reset instructions");
      }

      setSnackbar({
        open: true,
        message: "Reset instructions sent!",
        severity: "success",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Error: " + err.message,
        severity: "error",
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ margin: 2, color: "#9b51e0", textTransform: "none" }}
      >
        Back
      </Button>

      <Paper elevation={3} sx={{ padding: 4, mt: 2 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: "#9b51e0" }}>
          Forgot password?
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          No worries, we'll send you reset instructions.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Enter your email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            InputLabelProps={{ style: { color: "#9b51e0" } }}
            sx={{
              "& .MuiInput-underline:after": {
                borderBottomColor: "#9b51e0",
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#9b51e0",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { backgroundColor: "#7a3fc2" },
            }}
          >
            Reset password
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
}

export default ForgetPassword;
