import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import DialogBox from '../DialogBox';
import SignUpForm from './signUp';

export default function LoginForm({isOpen, onClose}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== retypePassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      console.log('Form Submitted:', { username, password, bio });
    }
  };

  return (
    <DialogBox isOpen={isOpen} onClose={onClose}>

      <Typography variant="h5" gutterBottom>
        Log In
      </Typography>
      
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Typography color="error" variant="body2" align="center" marginTop={1}>
                {error}
              </Typography>
            </Grid>
          )}
          
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2, backgroundColor: "#008B8B" }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              onClick={()=> setOpenSignUp(true)}
              sx={{
                marginTop: 2,
                color: "#008B8B",
                cursor: "pointer",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              New User? Sign Up here.
            </Typography>
          </Grid>

        </Grid>
      </form>
      <SignUpForm isOpen={openSignUp} onClose={() => {setOpenSignUp(false); onClose();}} />
      
    </DialogBox>
    
  );
}