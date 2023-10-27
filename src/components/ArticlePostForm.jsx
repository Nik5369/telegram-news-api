import { useState } from 'react'
import { MyInput } from './UI/input/MyInput'
import { MyButton } from './UI/button/MyButton'

export const ArticlePostForm = ({ postArticle }) => {
  const [postArticleValues, setPostArticleValues] = useState({
    title: '',
    descr: '',
  })
 
  const postArticleValuesFunc = (e) => {
    e.preventDefault()
    postArticle(postArticleValues)
  }

  return (
    <div className="post-article-form">
      <form onSubmit={postArticleValuesFunc}>
        <MyInput
          type="text"
          value={postArticleValues.title}
          onChange={(e) =>
            setPostArticleValues({
              ...postArticleValues,
              title: e.target.value,
            })
          }
          placeholder="Введите название статьи"
        />
        <MyInput
          type="text"
          value={postArticleValues.descr}
          onChange={(e) =>
            setPostArticleValues({
              ...postArticleValues,
              descr: e.target.value,
            })
          }
          placeholder="Введите текст статьи"
        />
        <MyButton>Создать статью</MyButton>
      </form>
    </div>
  )
}
