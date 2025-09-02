import { postArticle } from '@/shared/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { TArticle, TCreateArticle } from '../types/article'

export const createArticle = createAsyncThunk<TArticle, TCreateArticle>('user/getNewArticle', async (allValues) => {
  try {
    const response = await postArticle(allValues)

    if (response.ok) {
      return response.result
    }

    throw response.error
  } catch (error) {
    throw Error
  }
})
