import { useSelector } from 'react-redux'
import { Article } from './Article'
import { ArticlePostForm } from './ArticlePostForm'
import { v4 as uuidv4 } from 'uuid'
import { Loader } from './UI/loader/Loader'

export const ArticleList = () => {
  const { articles, articlesIsLoading } = useSelector((state) => state.user)
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
