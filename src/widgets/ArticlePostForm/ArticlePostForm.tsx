import { useState, type ChangeEvent, type ChangeEventHandler, type FormEvent, type FormHTMLAttributes } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useAppSelector } from '@shared/hooks/useAppSelector'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { MyButton, MyInput } from '@shared/ui'
import { getUserToken } from '@shared/services/localStorage/getUserToken'
import { convertSendedArticleText } from './services/convertSendedArticleText'
import { createArticle } from '@entities/Articles'

export const ArticlePostForm = () => {
  const dispatch = useAppDispatch()

  const {
    userValues: { author_name },
  } = useAppSelector((state) => state.user)

  const access_token = getUserToken()

  const [postArticleValues, setPostArticleValues] = useState({
    title: '',
    description: '',
  })

  const postArticleValuesFunc = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const content = convertSendedArticleText(postArticleValues.description)

    dispatch(createArticle({ title: postArticleValues.title, content, access_token, author_name }))
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
          value={postArticleValues.description}
          onChange={(e) =>
            setPostArticleValues({
              ...postArticleValues,
              description: e.target.value,
            })
          }
          placeholder="Введите текст статьи"
        />

        <MyButton>Создать статью</MyButton>
      </form>
    </div>
  )
}
