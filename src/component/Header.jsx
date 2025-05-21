import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; 
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Sidebar from "./Sidebar";
import Signup from "./Signup";
import Login from "./Login";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  useEffect(() => {
  
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleLogoutClick = () => {
    setOpenLogoutDialog(true);
  };

  const handleLogoutConfirm = () => {
  
    localStorage.clear();
    setIsLoggedIn(false);
    setOpenLogoutDialog(false);
   
  };

  const handleLogoutCancel = () => {
    setOpenLogoutDialog(false);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#9b51e0", position: "sticky", top: 0, zIndex: 1000 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
         
            {isLoggedIn && (
              <IconButton color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
            )}

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
              SAMAJH EDUCATION
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

         
            {!isLoggedIn && (
              <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<LoginIcon />}
                  onClick={handleOpenLogin}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PersonAddIcon />}
                  onClick={handleOpenSignup}
                >
                  Signup
                </Button>
              </Box>
            )}

         
            {isLoggedIn && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogoutClick}
                sx={{ ml: 2 }}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Sidebar */}
      <Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />

      {/* Signup Modal */}
      <Modal open={openSignup} onClose={handleCloseSignup}>
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
          <Signup handleClose={handleCloseSignup} />
        </Box>
      </Modal>

      {/* Login Modal */}
      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "400px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Login
            handleClose={() => {
              handleCloseLogin();
              // Update login state after successful login
              const token = localStorage.getItem("token");
              setIsLoggedIn(!!token);
            }}
          />
        </Box>
      </Modal>

      {/* Logout Confirmation Dialog */}
      <Dialog open={openLogoutDialog} onClose={handleLogoutCancel}>
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogoutConfirm} color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
