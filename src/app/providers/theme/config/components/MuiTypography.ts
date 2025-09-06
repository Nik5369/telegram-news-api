import type { Components, Theme } from '@mui/material';
import { defaultTransitionSettings } from '../consts/transitions';

export const MuiTypography: Components<Omit<Theme, 'components'>>['MuiTypography'] = {
  defaultProps: {
    variantMapping: {
      recurringTitle: 'p',
    },
  },
  styleOverrides: {
    root: {
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      transition: `all ${defaultTransitionSettings}`,
    },
  },
};
