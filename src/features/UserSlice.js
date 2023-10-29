import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Telegraph from '../API/Telegraph'

const initialState = {
  userValues: {
    short_name: '',
    author_name: '',
    author_url: '',
    token: '',
  },
  articles: [],
  userIsLoading: false,
  articlesIsLoading: false,
  identified: false,
  userFind: false,
  createArticle: false,
  userModal: false,
}

export const getUserValues = createAsyncThunk('user/getUser', async (token) => {
  try {
    const response = await Telegraph.singIn(token)
    return { ok: response.ok, data: { ...response.result, token } }
  } catch (error) {}
})
export const getArticles = createAsyncThunk(
  'user/getArticles',
  async (token) => {
    try {
      const response = await Telegraph.getPageList(token)
      return response
    } catch (error) {}
  }
)
export const getNewArticle = createAsyncThunk(
  'user/getNewArticle',
  async (allValues) => {
    try {
      const response = await Telegraph.postPage(allValues)
      return response
    } catch (error) {}
  }
)
export const getNewUserInfo = createAsyncThunk(
  'user/getNewUser',
  async ({ newUserInfo, userValues }) => {
    const token = userValues.token
    const newValues = {
      token: token,
      short_name: newUserInfo.short_name
        ? newUserInfo.short_name
        : userValues.short_name,
      author_name: newUserInfo.author_name
        ? newUserInfo.author_name
        : userValues.author_name,
      author_url: newUserInfo.author_url
        ? newUserInfo.author_url
        : userValues.author_url,
    }
    try {
      const response = await Telegraph.newUserInfo(newValues)
      return { ...response.result, token }
    } catch (error) {}
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserModal: (state, { payload }) => {
      state.userModal = payload
    },
  },
  extraReducers: {
    [getUserValues.pending]: (state) => {
      state.userIsLoading = true
    },
    [getUserValues.fulfilled]: (state, { payload }) => {
      if (payload.ok) {
        state.userValues = payload.data
        state.identified = true
      } else {
        state.userFind = true
      }
      state.userIsLoading = false
    },
    [getUserValues.rejected]: (state) => {
      state.userIsLoading = false
    },
    [getArticles.pending]: (state) => {
      state.articlesIsLoading = true
    },
    [getArticles.fulfilled]: (state, { payload }) => {
      state.articles = [...payload.result.pages]
      state.createArticle = false
      state.articlesIsLoading = false
    },
    [getArticles.rejected]: (state) => {
      state.articlesIsLoading = false
    },
    [getNewArticle.pending]: (state) => {},
    [getNewArticle.fulfilled]: (state, { payload }) => {
      state.createArticle = true
    },
    [getNewArticle.rejected]: (state) => {},
    [getNewUserInfo.pending]: (state) => {
      state.userIsLoading = true
    },
    [getNewUserInfo.fulfilled]: (state, { payload }) => {
      state.userValues = payload
      state.userIsLoading = false
    },
    [getNewUserInfo.rejected]: (state) => {
      state.userIsLoading = false
    },
  },
})

export const { setUserModal } = userSlice.actions
export default userSlice.reducer
