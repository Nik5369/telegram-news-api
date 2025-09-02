import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUser } from '@shared/api'
import { setUserToken } from '@shared/services/localStorage/setUserToken'
import type { TGEtUserResponse, TUser } from '../types/user'

export const getUserValues = createAsyncThunk<TUser, string>('user/getUser', async (token) => {
  try {
    const response = await getUser(token)

    if (response.ok) {
      setUserToken(token)

      return response.result
    }

    throw response.error
  } catch (error) {
    throw Error
  }
})
