'use client';
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#434343',
      paper: '#212121',
    },
    primary: {
      light: '#2d2a2a',
      main: '#ccccd1',
      dark: '#89898c',
      contrastText: '#fff',
    },
    text: {
      primary: '#d8d8d8',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 16,
  }
})

export default theme;