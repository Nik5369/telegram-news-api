import { createAsyncThunk } from '@reduxjs/toolkit';
import { senNewUserInfo } from '@shared/api';
import type { TEditUser } from '../types/user';

export const updateUserInfo = createAsyncThunk('user/getNewUser', async (editUserData: TEditUser) => {
  try {
    const response = await senNewUserInfo(editUserData);

    if (response.ok) {
      return response.result;
    }

    throw response.error;
  } catch (error) {
    throw Error;
  }
});
