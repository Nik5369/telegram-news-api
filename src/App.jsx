import { useEffect, useState } from 'react'
import './App.css'
import { SignIn } from './components/SignIn'
import { UserProfile } from './components/UserProfile'
import { ArticleList } from './components/ArticleList'
import { ChangeUserInfo } from './components/ChangeUserInfo'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from './features/UserSlice'

function App() {
  const dispatch = useDispatch()
  const { userValues, createArticle, userFind, identified } = useSelector(
    (state) => state.user
  )

  const [changeUserInfoModal, setChangeUserInfoModal] = useState(false)

  useEffect(() => {
    if (identified) {
      dispatch(getArticles(userValues.token))
    }
  }, [identified, createArticle])

  return (
    <div className="app">
      {!identified && (
        <SignIn
          active={!identified}
          notFound={userFind && 'Пользователь не найден'}
        />
      )}
      <div className="app-cont">
        <ArticleList />
        <UserProfile />
      </div>

      <ChangeUserInfo />
    </div>
  )
}

export default App
