import { ThemeSwitcher } from '@app/providers/theme/ui/ThemeSwitcher';
import { Grid, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';

type TProps = {};

export const Header: FC<TProps> = (props) => {
  const {} = props;

  const theme = useTheme();

  return (
    <Grid container justifyContent="space-between" p={2} px={3} alignItems="center" borderBottom={0.5}>
      <Typography variant="h1" color={theme.palette.primary.main}>
        React Telegraph
      </Typography>
      <ThemeSwitcher />
    </Grid>
  );
};
