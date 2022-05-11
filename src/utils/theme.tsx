import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    spacing: (factor: number) => string
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    spacing?: (factor: number) => string
  }
}

export const theme = createTheme({
    spacing: (factor: number) => `${0.25 * factor}rem`,
    palette: {
        background: {
            default: '#121212'
        },
        primary: {
            dark: '#fff',
            light: '#121212',
            main: '#fff',
            contrastText: '#fff'
        },
        secondary: {
          main: '#96f5c1',
          dark: '#16e975',
          light: '#d0fbe3',
          contrastText: '#e8fdf1'
        }
    },
    typography: {
        fontFamily: [
            'Cabin',
            'sans-serif'
        ].join(',')
    }
});
