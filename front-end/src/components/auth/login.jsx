import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import DialogBox from '../DialogBox';

export default function LoginForm({isOpen, onClose, isDarkMode}) {
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
              sx={{ marginTop: 2, backgroundColor: isDarkMode ? "#00CED1" : "#008B8B", }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </DialogBox>
  );
}