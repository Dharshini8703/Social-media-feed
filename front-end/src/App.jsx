import { useState } from 'react';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar'; 

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
      <NavBar isDarkMode={isDarkMode} setIsDarkMode = {setIsDarkMode}/> 
      <AppRoutes /> 
    </ThemeProvider>
  );
}

export default App;
