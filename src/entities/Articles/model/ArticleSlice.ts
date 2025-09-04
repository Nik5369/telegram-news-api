import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { createArticle } from './asyncThunks/createArticle';
import { getArticles } from './asyncThunks/getArticles';
import type { TArticlesListWithCount } from './types/article';
import type { articleSchema } from './types/articleSchema';

const initialState: articleSchema = {
  articles: [],
  articlesIsLoading: false,
  createArticle: false,
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.articlesIsLoading = true;
    });

    builder.addCase(getArticles.fulfilled, (state, { payload }: PayloadAction<TArticlesListWithCount>) => {
      state.articles = [...payload.pages];
      state.createArticle = false;
      state.articlesIsLoading = false;
    });

    builder.addCase(getArticles.rejected, (state) => {
      state.articlesIsLoading = false;
    });

    builder.addCase(createArticle.fulfilled, (state) => {
      state.createArticle = true;
    });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
