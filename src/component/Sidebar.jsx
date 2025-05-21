import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Box,
  Typography,
  IconButton,
  Collapse
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from '@mui/icons-material/Person';

function Sidebar({ open, toggleSidebar }) {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const navigate = useNavigate();

  const handleCoursesClick = () => {
    setCoursesOpen(!coursesOpen);
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <Box sx={{ width: 250 }}>
        {/* Profile Section */}
        <Box sx={{ display: "flex", alignItems: "center", p: 2, bgcolor: "#9b51e0", color: "white" }}>
          <Avatar sx={{ bgcolor: "white", color: "#9b51e0", mr: 2 }}>U</Avatar>
          <Typography variant="h6">User Name</Typography>
          <IconButton onClick={toggleSidebar} sx={{ ml: "auto", color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        {/* Sidebar Menu */}
        <List>
        <ListItem button onClick={() => { navigate("/Home"); toggleSidebar(); }}>
            <ListItemIcon><HomeIcon style={{color:"#9b51e0"}} /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleCoursesClick}>
            <ListItemIcon><MenuBookIcon style={{color:"#9b51e0"}}/></ListItemIcon>
            <ListItemText primary="Courses" />
            {coursesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon><LanguageIcon /></ListItemIcon>
                <ListItemText primary="English" />
              </ListItem> */}
                  <ListItem button onClick={() => { navigate("/english"); toggleSidebar(); }}>
            <ListItemIcon><LanguageIcon style={{color:"#9b51e0"}}/></ListItemIcon>
            <ListItemText primary="English" />
          </ListItem>
              {/* <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon><LanguageIcon /></ListItemIcon>
                <ListItemText primary="Hindi" />
              </ListItem> */}
                <ListItem button onClick={() => { navigate("/hindi"); toggleSidebar(); }}>
            <ListItemIcon><LanguageIcon style={{color:"#9b51e0"}}/></ListItemIcon>
            <ListItemText primary="Hindi" />
          </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon><LanguageIcon style={{color:"#9b51e0"}}/></ListItemIcon>
                <ListItemText primary="Computer" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon><LanguageIcon style={{color:"#9b51e0"}} /></ListItemIcon>
                <ListItemText primary="Combo" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon><SchoolIcon style={{color:"#9b51e0"}} /></ListItemIcon>
            <ListItemText primary="My Free Courses" />
          </ListItem>
          <ListItem button onClick={() => { navigate("/blog"); toggleSidebar(); }}>
            <ListItemIcon><ArticleIcon style={{color:"#9b51e0"}} /></ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
          {/* <ListItem button>
            <ListItemIcon><ArticleIcon /></ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem> */}
          {/* <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem> */}
           <ListItem button onClick={() => { navigate("/settings"); toggleSidebar(); }}>
            <ListItemIcon ><SettingsIcon style={{color:"#9b51e0"}} /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={() => { navigate("/myprofile"); toggleSidebar(); }}>
            <ListItemIcon><PersonIcon style={{color:"#9b51e0"}} /></ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><LogoutIcon style={{color:"#9b51e0"}} /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;