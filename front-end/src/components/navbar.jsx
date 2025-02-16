import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, DarkMode, LightMode } from "@mui/icons-material";

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    
  return (
    <>
      <AppBar position="fixed" sx={{backgroundColor: 'darkcyan'}}>
        <Toolbar >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            Social Media
          </Typography>

          <IconButton
            color="inherit"
            sx={{ ml: "auto" }}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* <div style={{ marginTop: "64px", padding: "20px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Welcome to My App
        </Typography>
      </div> */}
    </>
  );
};

export default Navbar;
