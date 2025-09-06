import { USER_TOKEN } from '@shared/const/localstorage';

export const setUserToken = (token: string) => {
  return localStorage.setItem(USER_TOKEN, token);
};
