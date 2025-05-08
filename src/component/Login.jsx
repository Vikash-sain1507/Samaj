// import React from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Grid,
//   TextField,
//   Typography,
// } from "@mui/material";


// function Login() {
//   return (
//     <Container>
//       <Grid container spacing={4} alignItems="center">
//         {/* Left Section (Image + Description) */}
//         <Grid item xs={12} md={6}>
//           <Box display="flex" flexDirection="column" alignItems="center">
//             <img
//               src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600"
//               // Replace with actual image URL
//               alt="Free Resources"
//               style={{ width: "100%", borderRadius: 8 }}
//             />
//             <Typography variant="h5" fontWeight="bold" color="primary" mt={2}>
//               Free Resources
//             </Typography>
//             <Typography variant="body2" color="textSecondary" textAlign="center">
//               Free Notes, Past Papers, MTPs RTPs, ICAI Suggested Answers, AIR 1 Answer Sheets & Free Demo Videos on various topics - All for FREE and all at one place!!
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Right Section (Login Form) */}
//         <Grid item xs={12} md={6}>
//           <Box textAlign="center">
//             <Typography variant="h4" fontWeight="bold" color="primary">
//               1FIN
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               By IndigoLearn
//             </Typography>

         
//             <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
//               <Checkbox />
//               <Typography variant="body2">
//                 I Accept <span style={{ color: "blue" }}>Terms of Use</span> and <span style={{ color: "blue" }}>Privacy Policy</span>
//               </Typography>
//             </Box>

//             {/* OR Divider */}
//             <Box display="flex" alignItems="center" my={2}>
//               <Box flex={1} height="1px" bgcolor="gray" />
//               <Typography mx={1} color="gray">or</Typography>
//               <Box flex={1} height="1px" bgcolor="gray" />
//             </Box>

//             {/* Phone Number Login */}
//             <Typography variant="body2" mb={1}>
//               Already have an account? Sign in using phone
//             </Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Enter phone number"
//               InputProps={{
//                 startAdornment: <Typography sx={{ pr: 1 }}>+91</Typography>,
//               }}
//             />

//             {/* OTP Button */}
//             <Button
//               variant="outlined"
//               fullWidth
//               sx={{
//                 mt: 2,
//                 borderRadius: "20px",
//                 borderColor: "purple",
//                 color: "purple",
//                 textTransform: "none",
//                 "&:hover": { backgroundColor: "purple", color: "white" },
//               }}
//             >
//               Get OTP on SMS
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Login;
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login success:", data);
        localStorage.setItem("token", data.token); 
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img
              src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Free Resources"
              style={{ width: "100%", borderRadius: 8 }}
            />
            <Typography variant="h5" fontWeight="bold" color="primary" mt={2}>
              Free Resources
            </Typography>
            <Typography variant="body2" color="textSecondary" textAlign="center">
              Free Notes, Past Papers, MTPs RTPs, ICAI Suggested Answers, AIR 1 Answer Sheets & Free Demo Videos on various topics - All for FREE and all at one place!!
            </Typography>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <Typography variant="h4" fontWeight="bold" color="primary">
              Ab Sabke Liye!
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              By Samaj
            </Typography>

            <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
              <Checkbox />
              <Typography variant="body2">
                I Accept <span style={{ color: "blue" }}>Terms of Use</span> and <span style={{ color: "blue" }}>Privacy Policy</span>
              </Typography>
            </Box>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              variant="outlined"
              type="password"
              placeholder="Enter your password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                borderRadius: "20px",
                backgroundColor: "purple",
                color: "white",
                textTransform: "none",
                "&:hover": { backgroundColor: "darkviolet" },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
