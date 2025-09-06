import type { Components, Theme } from '@mui/material';

export const MuiTextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
  styleOverrides: {
    root: {
      width: '100%',
    },
  },
};
