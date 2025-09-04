import { theme } from '@app/providers/theme';
import { getArticles } from '@entities/Articles/model/asyncThunks/getArticles';
import { getUserValues } from '@entities/User';
import { Grid, Typography } from '@mui/material';
import { getUserToken } from '@shared/services/localStorage/getUserToken';
import { useEffect } from 'react';
import { MainPage } from './pages/Main';
import { useAppDispatch } from './shared/hooks/useAppDispatch';
import { useAppSelector } from './shared/hooks/useAppSelector';

function App() {
  const dispatch = useAppDispatch();

  const { identified } = useAppSelector((state) => state.user);
  const { createArticle } = useAppSelector((state) => state.articles);

  const access_token = getUserToken();

  useEffect(() => {
    if (access_token) {
      dispatch(getUserValues(access_token));
      if (identified) {
        dispatch(getArticles(access_token));
      }
    }
  }, [identified, createArticle]);

  return (
    <Grid>
      <Grid container justifyContent="center" py={2}>
        <Typography variant="h1" color={theme.palette.primary.main}>
          React Telegraph manage
        </Typography>
      </Grid>
      {/* {!identified && <SignIn active={!identified} />} */}

      <MainPage />
    </Grid>
  );
}

export default App;
