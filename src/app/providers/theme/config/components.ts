import { MuiTextField } from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';

import { type ThemeOptions } from '@mui/material';
import { customScrollbar } from './custromOptions/scrollbar';

export const components: ThemeOptions['components'] = {
  MuiTypography,
  MuiTextField,
  MuiCssBaseline: {
    styleOverrides: (themeParam) => ({
      body: customScrollbar(themeParam),
    }),
  },
};
