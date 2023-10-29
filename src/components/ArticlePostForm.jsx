import { useState } from 'react'
import { MyInput } from './UI/input/MyInput'
import { MyButton } from './UI/button/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { getNewArticle } from '../features/UserSlice'

export const ArticlePostForm = () => {
  const dispatch = useDispatch()
  const { userValues } = useSelector((state) => state.user)
  const [postArticleValues, setPostArticleValues] = useState({
    title: '',
    descr: '',
  })

  const postArticleValuesFunc = (e) => {
    e.preventDefault()
    const { token, author_name, ...anyValues } = userValues
    dispatch(getNewArticle({ ...postArticleValues, token, author_name }))
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
