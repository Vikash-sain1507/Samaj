import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import {
  Phone,
  WhatsApp,
  Support,
  LinkedIn,
  Twitter,
  Instagram,
  Facebook,
  PlayArrow,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f1f1f1", py: 5, mt: 2 }}>
      <Container>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="#9b51e0"
              fontWeight="bold"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              SAMAJH EDUCATION
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 2, textAlign: { xs: "center", md: "left" } }}
            >
              We have been revolutionizing learning paths for students of CA,
              CFA, CMA, US CMA, and ACCA since 2017. “Learn Like Never Before”
              & ‘Students-first’ are the cornerstones of our approach.
            </Typography>
            <Box sx={{ mt: 2, textAlign: { xs: "center", md: "left" } }}>
              <IconButton><LinkedIn /></IconButton>
              <IconButton><Twitter /></IconButton>
              <IconButton><Instagram /></IconButton>
              <IconButton><Facebook /></IconButton>
              <IconButton>
                <Link
                  href="https://www.youtube.com/watch?v=0OLJaYETWoA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayArrow />
                </Link>
              </IconButton>
            </Box>
          </Grid>

          {/* Connect With Us */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Connect With Us
            </Typography>
            <Box sx={{ mt: 1, textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, mt: 1 }}>
                <Phone fontSize="small" sx={{ mr: 1 }} /> 8696015017
              </Typography>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, mt: 1 }}>
                <WhatsApp fontSize="small" sx={{ mr: 1 }} /> 8696015017
              </Typography>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, mt: 1 }}>
                <Support fontSize="small" sx={{ mr: 1 }} /> Support
              </Typography>
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Company
            </Typography>
            <Box sx={{ mt: 1, textAlign: { xs: "center", md: "left" } }}>
              <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>About Us</Link>
              <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Contact Us</Link>
              <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Careers</Link>
            </Box>
          </Grid>

          {/* Information */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Information
            </Typography>
            <Box sx={{ mt: 1, textAlign: { xs: "center", md: "left" } }}>
              <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Testimonials</Link>
              <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>FAQs</Link>
              <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Terms & Conditions</Link>
              <Link href="#" underline="none" display="block" color="inherit" sx={{ mt: 1 }}>Privacy Policy</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
