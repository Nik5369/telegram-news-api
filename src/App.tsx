import { getArticles } from '@entities/Articles/model/asyncThunks/getArticles';
import { getUserValues } from '@entities/User';
import { Grid } from '@mui/material';
import { MainPage } from '@pages/Main';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { getUserToken } from '@shared/services/localStorage/getUserToken';
import { SignIn } from '@widgets/SignIn';
import { useEffect } from 'react';

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
      {!identified && <SignIn active={!identified} />}
      <SignIn active={!identified} />

      <MainPage />
    </Grid>
  );
}

export default App;
