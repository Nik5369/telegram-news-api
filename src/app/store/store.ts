import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@entities/User/model/UserSlice'
import { articlesReducer } from '@/entities/Articles/model/ArticleSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articlesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
