export { USER_NAMES } from './const/user';

export type { TCreateUser, TEditUser, TGetUserInfo, TGEtUserResponse, TUser } from './model/types/user';
export type { userSchema } from './model/types/userSchema';

export { userActions, userReducer } from './model/UserSlice';

export { getUserValues } from './model/asyncThunks/getUsersValue';
export { updateUserInfo } from './model/asyncThunks/updateUserInfo';
