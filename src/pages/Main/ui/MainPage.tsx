import { Grid } from '@mui/material';
import { ArticleList } from '@widgets/ArticleList';

import { ChangeUserInfo } from '@widgets/ChangeUserInfo';
import { Header } from '@widgets/Header';
import { UserProfile } from '@widgets/UserProfile';
import type { FC } from 'react';

type TProps = {};

export const MainPage: FC<TProps> = (props) => {
  const {} = props;

  return (
    <Grid container direction="column" wrap="nowrap" height="100vh">
      <Header />

      <Grid container wrap="nowrap" justifyContent="space-between" m={4} overflow="hidden" gap={4}>
        <ArticleList />
        <UserProfile />
      </Grid>
      <ChangeUserInfo />
    </Grid>
  );
};
