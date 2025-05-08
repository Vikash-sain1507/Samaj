import React from "react";
import { Container, Grid, Typography, Link, IconButton, Box } from "@mui/material";
import { Phone, WhatsApp, Support, LinkedIn, Twitter, Instagram, Facebook, PlayArrow } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", padding: "40px 0",marginTop:"10px" }}>
      {/* <Container> */}
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="#9b51e0" fontWeight="bold">
              SAMAJ AJUCATION
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              We have been revolutionizing learning paths for students of CA, CFA, CMA, US CMA, and ACCA since 2017. “Learn Like Never Before” & ‘Students-first’ are the cornerstones of our approach.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton>
               <LinkedIn /></IconButton>
              <IconButton><Twitter /></IconButton>
              <IconButton><Instagram /></IconButton>
              <IconButton><Facebook /></IconButton>
              <IconButton>  <Link href="https://www.youtube.com/watch?v=0OLJaYETWoA"> <PlayArrow /></Link></IconButton>
            </Box>
          </Grid>
          
          {/* Connect With Us */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight="bold">Connect With Us</Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Phone fontSize="small" sx={{ mr: 1 }} /> 8696015017
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <WhatsApp fontSize="small" sx={{ mr: 1 }} /> 8696015017
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Support fontSize="small" sx={{ mr: 1 }} /> Support
            </Typography>
          </Grid>
          
          {/* Company */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight="bold">Company</Typography>
            <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>About Us</Link>
            <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Contact Us</Link>
            <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Careers</Link>
          </Grid>
          
          {/* Information */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight="bold">Information</Typography>
            <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Testimonials</Link>
            <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>FAQs</Link>
            <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Terms & Conditions</Link>
            <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Privacy Policy</Link>
          </Grid>
        </Grid>
      {/* </Container> */}
    </Box>
  );
};

export default Footer;

// import React from "react";
// import { Box, Typography, Grid, TextField, Button, Link, InputAdornment } from "@mui/material";

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: "#1E1E37", color: "#ffffff", py: 6 }}>
//       <Grid container justifyContent="center" spacing={4}>
//         {/* Logo & Tagline */}
//         <Grid item xs={12} textAlign="center">
//           <Box display="inline-flex" alignItems="center" gap={2}>
//             <Box
//               sx={{
//                 border: "1px solid #00BCD4",
//                 borderRadius: "8px",
//                 px: 2,
//                 py: 1,
//                 color: "#00BCD4",
//                 fontWeight: "bold",
//                 fontSize: "18px",
//               }}
//             >
//               TOTC
//             </Box>
//             <Typography variant="subtitle1">Virtual Class for Zoom</Typography>
//           </Box>
//         </Grid>

//         {/* Newsletter Subscription */}
//         <Grid item xs={12} textAlign="center">
//           <Typography variant="h6" gutterBottom>
//             Subscribe to get our Newsletter
//           </Typography>
//           <Box
//             component="form"
//             sx={{
//               display: "inline-flex",
//               backgroundColor: "#2C2C4A",
//               borderRadius: "30px",
//               overflow: "hidden",
//             }}
//           >
//             <TextField
//               placeholder="Your Email"
//               variant="standard"
//               InputProps={{
//                 disableUnderline: true,
//                 sx: {
//                   color: "#fff",
//                   px: 2,
//                   py: 1,
//                   width: "250px",
//                 },
//               }}
//               sx={{ backgroundColor: "transparent" }}
//             />
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#4DE2C1",
//                 color: "#000",
//                 px: 4,
//                 borderRadius: 0,
//                 "&:hover": { backgroundColor: "#3cc0a7" },
//               }}
//             >
//               Subscribe
//             </Button>
//           </Box>
//         </Grid>

//         {/* Footer Links */}
//         <Grid item xs={12} textAlign="center">
//           <Box sx={{ mt: 4 }}>
//             <Link href="#" color="inherit" underline="none" sx={{ mx: 2 }}>
//               Careers
//             </Link>
//             <Link href="#" color="inherit" underline="none" sx={{ mx: 2 }}>
//               Privacy Policy
//             </Link>
//             <Link href="#" color="inherit" underline="none" sx={{ mx: 2 }}>
//               Terms & Conditions
//             </Link>
//           </Box>
//         </Grid>

//         {/* Copyright */}
//         <Grid item xs={12} textAlign="center" sx={{ mt: 2 }}>
//           <Typography variant="body2" sx={{ color: "#B0B0B0" }}>
//             © 2021 Class Technologies Inc.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Footer;

