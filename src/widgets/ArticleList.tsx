import { useAppSelector } from '@shared/hooks/useAppSelector';
import { Loader } from '@shared/ui';
import { v4 as uuidv4 } from 'uuid';

import { Article } from '@features/Article/';
import { Grid, useTheme } from '@mui/material';
import { ArticlePostForm } from './ArticlePostForm/ArticlePostForm';

export const ArticleList = () => {
  const { articles, articlesIsLoading } = useAppSelector((state) => state.articles);
  const theme = useTheme();

  return (
    <Grid
      container
      gap={4}
      direction="column"
      wrap="nowrap"
      bgcolor={theme.palette.background.paper}
      p={2}
      size={6}
      borderRadius={2}
    >
      <ArticlePostForm />
      <Grid container direction="column" gap={2} wrap="nowrap" overflow="auto" pr={2} pb={5}>
        {articlesIsLoading && <Loader />}
        {articles.map((el) => {
          return <Article key={uuidv4()} item={{ ...el }} />;
        })}
      </Grid>
    </Grid>
  );
};
