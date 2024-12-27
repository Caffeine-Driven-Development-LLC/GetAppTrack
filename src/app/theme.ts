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
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
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