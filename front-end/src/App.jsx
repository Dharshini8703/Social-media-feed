import { useState } from 'react';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import BottomNavBar from './components/BottomNavBar';
import Navbar from './components/navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode = {setIsDarkMode}/> 
      <AppRoutes /> 
      <BottomNavBar isDarkMode={isDarkMode} setIsDarkMode = {setIsDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
