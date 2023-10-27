import { ArticlePostForm } from './ArticlePostForm'

export const ArticleList = ({ postArticle }) => {
  return (
    <div className="article-list">
      <ArticlePostForm postArticle={postArticle} />
    </div>
  )
}
