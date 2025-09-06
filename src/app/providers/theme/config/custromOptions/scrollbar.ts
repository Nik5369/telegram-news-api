import type { Theme } from '@mui/material';

export const customScrollbar = (themeParam: Omit<Theme, 'components'>) => ({
  scrollbarColor: 'red',
  '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
    backgroundColor: 'unset',

    width: '.5rem',
  },
  '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
    borderRadius: '2rem',
    backgroundColor: `${themeParam.palette.primary.main}`,
  },
});
