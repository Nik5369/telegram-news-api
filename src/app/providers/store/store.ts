import { articlesReducer } from '@entities/Articles/model/ArticleSlice';
import { userReducer } from '@entities/User/model/UserSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
