import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import DialogBox from '../DialogBox';

export default function SignUpForm({isOpen, onClose}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');

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
        Sign Up
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

          <Grid item xs={12}>
            <TextField
              label="Retype Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Bio"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4} // Allow for multiple lines of text
              value={bio}
              onChange={(e) => setBio(e.target.value)}
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
          
        </Grid>
      </form>
    </DialogBox>
  );
}