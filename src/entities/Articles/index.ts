export type {
  TArticle,
  TArticleListResponse,
  TArticlesListWithCount,
  TArticleResponse,
  TCreateArticle,
} from './model/types/article';
export type { articleSchema } from './model/types/articleSchema';

export { articlesReducer, articlesActions } from './model/ArticleSlice';

export { getArticles } from './model/asyncThunks/getArticles';
export { createArticle } from './model/asyncThunks/createArticle';
