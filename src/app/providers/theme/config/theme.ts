import { createTheme } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { components } from './components';
import { darkPalette, lightPalette } from './palette';
import { typography } from './typography';

export const theme: Theme = createTheme({
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  components,
  typography,
});
