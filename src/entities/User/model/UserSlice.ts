import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { getUserValues } from './asyncThunks/getUsersValue'
import { getArticles } from './asyncThunks/getArticles'
import { updateUserInfo } from './asyncThunks/updateUserInfo'
import { createArticle } from './asyncThunks/createArticle'
import type { userSchema } from './types/userSchema'
import { setUserToken } from '@/shared/services/localStorage/setUserToken'
import type { TUser } from './types/user'
import type { TArticlesListWithCount } from './types/article'

const initialState: userSchema = {
  userValues: {
    short_name: '',
    author_name: '',
    author_url: '',
  },
  articles: [],
  userIsLoading: false,
  articlesIsLoading: false,
  identified: false,
  userFind: false,
  createArticle: false,
  userModal: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserModal: (state, { payload }) => {
      state.userModal = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserValues.pending, (state) => {
      state.userIsLoading = true
    })

    builder.addCase(getUserValues.fulfilled, (state, { payload }: PayloadAction<TUser | null>) => {
      if (payload) {
        state.userValues = payload
        state.identified = true
      } else {
        state.userFind = true
      }
      state.userIsLoading = false
    })

    builder.addCase(getUserValues.rejected, (state) => {
      state.userIsLoading = false
    })

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

    builder.addCase(updateUserInfo.pending, (state) => {
      state.userIsLoading = true
    })

    builder.addCase(updateUserInfo.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.userValues = payload
      state.userIsLoading = false
    })

    builder.addCase(updateUserInfo.rejected, (state) => {
      state.userIsLoading = false
    })
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
