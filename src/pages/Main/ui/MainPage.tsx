import { ThemeSwitcher } from '@app/providers/theme/ui/ThemeSwitcher';
import { ArticleList } from '@widgets/ArticleList';
import { ChangeUserInfo } from '@widgets/ChangeUserInfo';
import { UserProfile } from '@widgets/UserProfile';
import { Grid, Paper } from '@mui/material';
import type { FC } from 'react';

type TProps = {};

export const MainPage: FC<TProps> = (props) => {
  const {} = props;

  return (
    <Paper>
      <Grid container wrap="nowrap" justifyContent="space-between" height={'100vh'} p={2}>
        <ArticleList />
        <UserProfile />

        <ChangeUserInfo />
      </Grid>
      <ThemeSwitcher />
    </Paper>
  );
};
