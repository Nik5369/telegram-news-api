import { Article } from './Article'
import { ArticlePostForm } from './ArticlePostForm'
import { v4 as uuidv4 } from 'uuid'

export const ArticleList = ({ postArticle, articleList }) => {
  return (
    <div className="article-list">
      <ArticlePostForm  postArticle={postArticle} />
    
      <div className="">
      {console.log('fasfsafsa')}
      {articleList.map(el => {
        return <Article key={uuidv4()} item={{...el}} />
      })}
      </div>
    </div>
  )
}
