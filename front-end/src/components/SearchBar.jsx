import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";

const SearchBar = ({ isdarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const colors = isdarkMode
    ? {
        background: "black",
        text: "#FFFFFF",
        placeholder: "#B0B0B0",
        icon: "#00CED1",
      }
    : {
        background: "#FFFFFF",
        text: "#000000",
        placeholder: "#757575",
        icon: "#008B8B",
      };

  return (
<TextField
  variant="outlined"
  placeholder="Search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  sx={{
    width: "100%",
    maxWidth: 400,
    backgroundColor: colors.background,
    borderRadius: "30px",
    "& .MuiOutlinedInput-root": {
      color: colors.text,
      fontSize: "0.585rem",  // Reduce font size (default is 1rem)
      lineHeight: 1.2,       // Control line height to reduce height
      "& fieldset": { borderColor: colors.icon }, // Border color
      "&:hover fieldset": { borderColor: colors.icon },
      "&.Mui-focused fieldset": { borderColor: colors.icon },
    },
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <Search sx={{ color: colors.icon }} />
      </InputAdornment>
    ),
    endAdornment: searchTerm && (
      <InputAdornment position="end">
        <IconButton onClick={() => setSearchTerm("")}>
          <Clear sx={{ color: colors.icon }} />
        </IconButton>
      </InputAdornment>
    ),
  }}
/>


  );
};

export default SearchBar;
