import type { TUser } from './user'

export type userSchema = {
  userValues: TUser
  userIsLoading: boolean
  identified: boolean
  userModal: boolean
}
