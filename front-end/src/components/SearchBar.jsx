import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      sx={{
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#FFFFFF",
        borderRadius: "30px",
        "& .MuiOutlinedInput-root": {
          color: "#000000",
          fontSize: "0.585rem",  
          lineHeight: 1.2,   
          "& fieldset": { borderColor: "#008B8B" }, 
          "&:hover fieldset": { borderColor: "#008B8B" },
          "&.Mui-focused fieldset": { borderColor: "#008B8B" },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search sx={{ color: "#008B8B" }} />
          </InputAdornment>
        ),
        endAdornment: searchTerm && (
          <InputAdornment position="end">
            <IconButton onClick={() => setSearchTerm("")}>
              <Clear sx={{ color: "#008B8B" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />


  );
};

export default SearchBar;
