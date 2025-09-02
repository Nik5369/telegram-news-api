import type { TArticle } from './article'
import type { TUser } from './user'

export type userSchema = {
  userValues: TUser
  articles: TArticle[]
  userIsLoading: boolean
  articlesIsLoading: boolean
  identified: boolean
  userFind: boolean
  createArticle: boolean
  userModal: boolean
}
