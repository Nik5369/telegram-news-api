import { useState } from 'react'

import './App.css'
import { SignIn } from './components/SignIn'
import Telegraph from './API/Telegraph'
import { UserProfile } from './components/UserProfile'
import { ArticleList } from './components/ArticleList'

function App() {
  const [identified, setIdentified] = useState(false)
  const [user, setUser] = useState({})
  const [userFind, setUserFind] = useState(false)

  const getUser = async (token) => {
    const response = await Telegraph.singIn(token)
    if (response.ok) {
      setUser({ ...response.result, token: token })
      setIdentified(true)
    } else {
      setUserFind(true)
    }
  }

  const postArticle = async (articleValues) => {
    const { token, author_name, ...anyValues } = user
    const allArticleValues = {
      ...articleValues,
      token,
      author_name,
    }
    const response = await Telegraph.postPage(allArticleValues)
    console.log(response)
  }

  return (
    <div className="app">
      {!identified ? (
        <SignIn
          getUser={getUser}
          notFound={userFind && 'Пользователь не найден'}
        />
      ) : (
        <div className="app-cont">
          <ArticleList postArticle={postArticle} />
          <UserProfile user={user} />
        </div>
      )}
    </div>
  )
}

export default App
