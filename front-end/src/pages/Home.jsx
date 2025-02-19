import { Chat, HomeMax, VideoLibrary } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return (

    <Box sx={{ display: "flex", height: "100vh" }}>

      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Box sx={{ flex: 2, width: '900px', padding: 2, overflowY: "auto", height: "100vh" }}>
          <Typography variant="h6">Feed</Typography>
        </Box>

        <Box
          sx={{
            width: "400px", 
            backgroundColor: "#f0f2f5",
            padding: 2,
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <Typography variant="h6">Suggesstion</Typography>
        </Box>
      </Box>
    </Box>


  )
}

export default Home