import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Home, Search, AddBox, AccountCircle } from "@mui/icons-material";

const BottomNavBar = ({isDarkMode, setIsDarkMode}) => {
    const [value, setValue] = useState(0);

    const colors = isDarkMode
    ? {
        background: "#00CED1",
        selectedBg: "#121212",
        textInactive: "#FFF",
        textActive: "#00E5EE",
      }
    : {
        background: "#008B8B",
        selectedBg: "#FFFFFF",
        textInactive: "#FFFFFF",
        textActive: "#008B8B",
      };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: colors.background }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{ 
            backgroundColor: colors.background
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
              color: value === index ? colors.textActive : colors.textInactive,
              backgroundColor: value === index ? colors.selectedBg : colors.background,
              border: "none",
              "&.Mui-selected": {
                color: colors.textActive,
                backgroundColor: colors.selectedBg,
                border: "none",
              },
              "&:focus-visible": {
                border: `2px solid ${colors.textActive}`,
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
