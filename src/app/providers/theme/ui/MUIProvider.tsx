import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { theme } from '../config/theme';

export function MUIProvider({ children }: { children: ReactNode }) {
  console.log('MUI Provider: enabled');

  return (
    <ThemeProvider theme={theme} noSsr>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
