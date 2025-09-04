import type { TArticle } from './article';

export type articleSchema = {
  articles: TArticle[];
  articlesIsLoading: boolean;
  createArticle: boolean;
};
