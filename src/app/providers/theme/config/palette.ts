import type { PaletteOptions } from '@mui/material';

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#1de9b6',
    light: '#4aedc4',
    dark: '#14a37f',
    contrastText: 'rgba(55,55,45,0.87)',
  },
  secondary: {
    main: '#f50057',
    light: '#F73378',
    dark: '#AB003C',
    contrastText: '#ffffff',
  },
  background: {
    default: '#121212',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255,255,255,0.7)',
    disabled: 'rgba(255,255,255,0.5)',
  },
};

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#29d296',
  },
  secondary: {
    main: '#f5a900',
  },
  background: {
    default: '#fffdf0',
    paper: '#f7f7f7',
  },
};
