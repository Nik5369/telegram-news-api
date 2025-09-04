import type { AxiosResponse } from 'axios';
import { api } from '@shared/lib/axios/axios';
import type { TEditUser, TGEtUserResponse, TUser } from '@entities/User/model/types/user';

export const getUser = async (token: string) => {
  try {
    const response: AxiosResponse<TGEtUserResponse> = await api.get('getAccountInfo/', {
      params: {
        access_token: token,
      },
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};

export const senNewUserInfo = async (editUserData: TEditUser) => {
  try {
    const response: AxiosResponse<TGEtUserResponse> = await api.get('editAccountInfo/', {
      params: editUserData,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};
