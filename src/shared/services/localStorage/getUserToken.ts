import { USER_TOKEN } from '@/shared/const/localstorage';

export const getUserToken = () => {
  return localStorage.getItem(USER_TOKEN);
};
