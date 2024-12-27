'use client';
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#434343',
      paper: '#212121',
    },
    primary: {
      light: '#757ce8',
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
    allVariants: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
    }
  }
})

export default theme;