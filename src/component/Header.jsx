import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Modal,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Sidebar from "./Sidebar";
import Signup from "./Signup"; // Import Signup component
import Login from "./Login";
// import { FaChessQueen } from "react-icons/fa";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Trophy symbol

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);
  
  const handleOpenLogin =()=>{
    setOpenLogin(true)
  }
const handleCloseLogin =()=>{
  setOpenLogin(false)
}
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#9b51e0" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Sidebar Toggle Button */}
            <IconButton color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>

            <EmojiEventsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SAMAJ AJUCATION
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            {/* Login & Signup Buttons */}
            <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
              <Button variant="contained" color="secondary" startIcon={<LoginIcon />}
             onClick={handleOpenLogin} >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PersonAddIcon />}
                onClick={handleOpenSignup} // Open Signup modal
              >
                Signup
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Sidebar Component */}
      <Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />

      {/* Signup Modal */}
      <Modal open={openSignup} onClose={handleCloseSignup}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width:"auto",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Signup handleClose={handleCloseSignup} />
        </Box>
      </Modal>
      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Login handleClose={handleCloseLogin} />
        </Box>
      </Modal>
    </>
  );
};

export default Header;
