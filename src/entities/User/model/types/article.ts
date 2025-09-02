import type { TTelegraphResponse } from '@/shared/types'

export type TArticle = {
  title: string
  url: string
  author_name: string
  description: string
  path: string
  views: number
  can_edit: boolean
}

export type TCreateArticle = {
  access_token: string | null
  title: string
  author_name: string
  content: string
  return_content?: boolean
}

export type TArticlesListWithCount = {
  total_count: number
  pages: TArticle[]
}

export type TArticleListResponse = TTelegraphResponse<TArticlesListWithCount>

export type TArticleResponse = TTelegraphResponse<TArticle>
