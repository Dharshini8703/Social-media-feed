import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import LoginForm from "./auth/login";
import ProfileSidebar from "./Profile";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); 

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#008B8B", zIndex: 1201 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ textAlign: "start" }}>
            Social Media
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <SearchBar />
          </Box>

          <Button
            color="inherit"
            sx={{ border: "2px solid #FFFFFF", borderRadius: "20px" }}
            onClick={() => setOpen(true)}
          >
            LogIn/SignUp
          </Button>
        </Toolbar>
      </AppBar>

      <Box
      >
       <Typography>Profile Details</Typography>
        <ProfileSidebar/>
      </Box>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, mt: 10 }}>
         <Typography>Profile Details</Typography>
        </Box>
      </Drawer>

      <LoginForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
