import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlesList } from '@shared/api';
import type { TArticlesListWithCount } from '../types/article';

export const getArticles = createAsyncThunk<TArticlesListWithCount, string>(
  'user/getArticles',
  async (access_token) => {
    try {
      const response = await getArticlesList(access_token);

      if (response.ok) {
        return response.result;
      }

      throw response.error;
    } catch (error) {
      throw Error;
    }
  }
);
