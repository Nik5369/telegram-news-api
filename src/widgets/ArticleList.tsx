import { useSelector } from 'react-redux'
import { Article } from './Article'
import { ArticlePostForm } from './ArticlePostForm/ArticlePostForm'
import { v4 as uuidv4 } from 'uuid'
import { Loader } from '@/shared/ui'
import { useAppSelector } from '@/shared/hooks/useAppSelector'

export const ArticleList = () => {
  const { articles, articlesIsLoading } = useAppSelector((state) => state.articles)

  return (
    <div className="article-list">
      <ArticlePostForm />
      <div className="article-list-content">
        {articlesIsLoading && <Loader />}
        {articles.map((el) => {
          return <Article key={uuidv4()} item={{ ...el }} />
        })}
      </div>
    </div>
  )
}
