export { userReducer, userActions } from './model/UserSlice'

export type { userSchema } from './model/types/userSChema'

export { getArticles } from './model/asyncThunks/getArticles'
export { createArticle } from './model/asyncThunks/createArticle'
export { updateUserInfo } from './model/asyncThunks/updateUserInfo'
export { getUserValues } from './model/asyncThunks/getUsersValue'
