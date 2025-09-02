import { useEffect, useState } from 'react'
import './App.css'

import { getArticles } from '@entities/Articles/model/asyncThunks/getArticles'
import { useAppDispatch } from './shared/hooks/useAppDispatch'
import { useAppSelector } from './shared/hooks/useAppSelector'
import { ArticleList } from '@widgets/ArticleList'
import { ChangeUserInfo } from '@widgets/ChangeUserInfo'
import { UserProfile } from '@widgets/UserProfile'
import { SignIn } from '@widgets/SignIn'
import { getUserToken } from './shared/services/localStorage/getUserToken'

function App() {
  const dispatch = useAppDispatch()

  const { userFind, identified } = useAppSelector((state) => state.user)
  const { createArticle } = useAppSelector((state) => state.articles)

  const access_token = getUserToken()

  useEffect(() => {
    if (identified && access_token) {
      dispatch(getArticles(access_token))
    }
  }, [identified, createArticle])

  return (
    <div className="app">
      {!identified && <SignIn active={!identified} notFound={userFind} />}
      <div className="app-cont">
        <ArticleList />
        <UserProfile />
      </div>

      <ChangeUserInfo />
    </div>
  )
}

export default App
