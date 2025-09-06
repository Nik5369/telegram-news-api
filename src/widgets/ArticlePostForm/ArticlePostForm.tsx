import { useState } from 'react';

import { createArticle } from '@entities/Articles';
import { Button, Grid } from '@mui/material';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { getUserToken } from '@shared/services/localStorage/getUserToken';
import { Input } from '@shared/ui';
import { convertSendedArticleText } from './services/convertSendedArticleText';

export const ArticlePostForm = () => {
  const dispatch = useAppDispatch();

  const {
    userValues: { author_name },
  } = useAppSelector((state) => state.user);

  const access_token = getUserToken();

  const [postArticleValues, setPostArticleValues] = useState({
    title: '',
    description: '',
  });

  const postArticleValuesFunc = () => {
    const content = convertSendedArticleText(postArticleValues.description);

    dispatch(
      createArticle({
        title: postArticleValues.title,
        content,
        access_token,
        author_name,
      })
    );
  };

  const sendIsDisabled = !postArticleValues.title.length || !postArticleValues.description.length;

  return (
    <Grid container>
      <Grid container gap={4} mb={2} size={15}>
        <Input
          type="text"
          value={postArticleValues.title}
          label="Заголовок"
          name="title"
          onChange={(e) =>
            setPostArticleValues({
              ...postArticleValues,
              title: e.target.value,
            })
          }
          placeholder="Введите название статьи"
        />

        <Input
          type="text"
          value={postArticleValues.description}
          label="Контент"
          name="Content"
          onChange={(e) =>
            setPostArticleValues({
              ...postArticleValues,
              description: e.target.value,
            })
          }
          placeholder="Введите текст статьи"
        />
      </Grid>
      <Button variant="contained" disabled={sendIsDisabled} onClick={postArticleValuesFunc}>
        Создать статью
      </Button>
    </Grid>
  );
};
