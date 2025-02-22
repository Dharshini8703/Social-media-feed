import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const ProfileSidebar = () => {
  return (
    <Box
      sx={{
        width: "350px",
        height: "100vh",
        position: "fixed",
        top: "64px", 
        left: 0,
        backgroundColor: "#f0f2f5",
        padding: 2,
        overflowY: "auto",
        display: { xs: "none", md: "block" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Avatar 
          src="https://via.placeholder.com/80" 
          alt="User" 
          sx={{ width: 80, height: 80 }} 
        />

        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: "20px" }}>John Doe</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="body2"><b>120</b> Posts</Typography>
            <Typography variant="body2"><b>5K</b> Followers</Typography>
            <Typography variant="body2"><b>300</b> Following</Typography>
          </Box>
        </Box>
      </Box>

      {/* Bio Section */}
      <Typography variant="body1" sx={{ mt: 3, fontStyle: "italic" }}>
        Passionate about coding, design & tech. Love to build cool projects! 🚀
      </Typography>
    </Box>
  );
};

export default ProfileSidebar;
