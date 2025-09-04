import { createAsyncThunk } from '@reduxjs/toolkit';
import type { TEditUser, TUser } from '../types/user';
import { senNewUserInfo } from '@/shared/api';

export const updateUserInfo = createAsyncThunk('user/getNewUser', async (editUserData: TEditUser) => {
  try {
    const response = await senNewUserInfo(editUserData);

    if (response.ok) {
      return response;
    }

    throw response.error;
  } catch (error) {
    throw Error;
  }
});
