import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Menu as MenuIcon, DarkMode, LightMode } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import LoginForm from "./auth/login";

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
    <AppBar position="fixed" sx={{ backgroundColor: isDarkMode ? "#00CED1" : "#008B8B", }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ textAlign: "start" }}>
          Social Media
        </Typography>

        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <SearchBar isDarkMode={isDarkMode}/>
        </Box>

        <IconButton
          color="inherit"
          onClick={() => setIsDarkMode(!isDarkMode)}
          sx={{marginRight: '10px'}}
        >
          {isDarkMode ? <DarkMode /> : <LightMode />}
        </IconButton>


        <Button color="inherit" sx={{border: '2px solid #FFFFFF', borderRadius: '20px'}} onClick={()=> setOpen(true)}>LogIn/SignUp</Button>
      </Toolbar>
    </AppBar>

    <LoginForm isOpen={open} onClose={() => setOpen(false)} isDarkMode={isDarkMode}/>

      {/* <div style={{ marginTop: "64px", padding: "20px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Welcome to My App
        </Typography>
      </div> */}
    </>
  );
};

export default Navbar;
