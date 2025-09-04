import { CssBaseline } from '@mui/material';
import type { ReactNode } from 'react';
import { theme } from '../config/theme';
import { ThemeProvider } from '@mui/material/styles';

export default function MUIProvider({ children }: { children: ReactNode }) {
  console.log('MUI Provider: enabled');

  return (
    <ThemeProvider theme={theme} noSsr>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
