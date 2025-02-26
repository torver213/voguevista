'use client';
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { CssBaseline } from '@mui/material';

const AppThemeContext = (props: any) => {

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette: {
    primary: {
      main: '#ff006e',
      contrastText: "#fff",
    },
    secondary: {
      main: '#ff70a6',
      contrastText: "#fff",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff006e',
          contrastText: "#fff",
        },
        secondary: {
          main: '#ff70a6',
          contrastText: "#fff",
        },
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#ff006e',
          contrastText: "#fff",
        },
        secondary: {
          main: '#ff70a6',
          contrastText: "#fff",
        },
      }
    },
  }
});

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
        {props.children}
    </ThemeProvider>
  )
}

export default AppThemeContext