import { createTheme, PaletteColorOptions, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    spacing: (factor: number) => string
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    spacing?: (factor: number) => string
  }
}

const myGreen: PaletteColorOptions = {
  dark: '#63c191',
  light: '#c8fff4',
  main: '#95f4c1',
  contrastText: '#e8fdf1'
}

const myWhite: PaletteColorOptions = {
  main: '#f9f9f9',
  light: '#fff',
  dark: '#c6c6c6'
}

const spacing = (factor: number) => `${0.25 * factor}rem`

export const theme = responsiveFontSizes(createTheme({
  spacing,
  palette: {
    mode: 'dark',
    primary: myWhite,
    secondary: myGreen
  },
  typography: {
    fontFamily: [
      'Cabin',
      'sans-serif'
    ].join(','),
    fontSize: 16,
    h1: {
      fontWeight: 'bolder'
    },
    h2: {
      fontWeight: 'bolder'
    },
    h3: {
      fontWeight: 'bolder'
    }
  }
}));
