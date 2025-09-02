export type { TCreateUser, TEditUser, TGEtUserResponse, TGetUserInfo, TUser } from './model/types/user'
export type { userSchema } from './model/types/userSchema'

export { userReducer, userActions } from './model/UserSlice'

export { updateUserInfo } from './model/asyncThunks/updateUserInfo'
export { getUserValues } from './model/asyncThunks/getUsersValue'
