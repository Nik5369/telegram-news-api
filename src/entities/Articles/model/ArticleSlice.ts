import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'

import { setUserToken } from '@/shared/services/localStorage/setUserToken'

import type { TArticlesListWithCount } from './types/article'
import type { articleSchema } from './types/articleSchema'
import { getArticles } from './asyncThunks/getArticles'
import { createArticle } from './asyncThunks/createArticle'

const initialState: articleSchema = {
  articles: [],

  articlesIsLoading: false,

  createArticle: false,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.articlesIsLoading = true
    })

    builder.addCase(getArticles.fulfilled, (state, { payload }: PayloadAction<TArticlesListWithCount>) => {
      state.articles = [...payload.pages]
      state.createArticle = false
      state.articlesIsLoading = false
    })

    builder.addCase(getArticles.rejected, (state) => {
      state.articlesIsLoading = false
    })

    builder.addCase(createArticle.fulfilled, (state) => {
      state.createArticle = true
    })
  },
})

export const { actions: articlesActions } = articlesSlice
export const { reducer: articlesReducer } = articlesSlice
