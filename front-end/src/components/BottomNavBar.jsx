import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Home, Search, AddBox, AccountCircle } from "@mui/icons-material";

const BottomNavBar = () => {
    const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "#008B8B" }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{ 
            backgroundColor: "#008B8B"
        }}
      >
        {[
          { label: "Home", icon: <Home /> },
          { label: "Search", icon: <Search /> },
          { label: "Post", icon: <AddBox /> },
          { label: "Profile", icon: <AccountCircle /> },
        ].map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={item.icon}
            sx={{
              color: value === index ? "#008B8B" : "#FFFFFF",
              backgroundColor: value === index ? "#FFFFFF" : "#008B8B",
              border: "none",
              "&.Mui-selected": {
                color: "#008B8B",
                backgroundColor: "#FFFFFF",
                border: "none",
              },
              "&:focus-visible": {
                border: `2px solid ${"#008B8B"}`,
                borderRadius: "10px",
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNavBar;
