import type { AxiosResponse } from 'axios'
import { api } from '../lib/axios/axios'
import type { TArticleListResponse, TArticleResponse, TCreateArticle } from '@/entities/User/model/types/article'

export const postArticle = async (values: TCreateArticle) => {
  try {
    const response: AxiosResponse<TArticleResponse> = await api.get('createPage/', {
      params: values,
    })

    return response.data
  } catch (e) {
    throw e
  }
}

export const getArticlesList = async (access_token: string) => {
  try {
    const response: AxiosResponse<TArticleListResponse> = await api.get('getPageList/', {
      params: { access_token },
    })

    return response.data
  } catch (e) {
    throw e
  }
}
