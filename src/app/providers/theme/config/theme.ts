import { createTheme } from '@mui/material';
import { darkPalette, lightPalette } from './palette';
import type { Theme } from '@mui/material/styles';
import { typography } from './typography';

export const theme: Theme = createTheme({
  colorSchemes: {
    dark: { palette: darkPalette },
    light: { palette: lightPalette },
  },
  typography,
});
