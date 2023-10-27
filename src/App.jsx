import { useEffect, useState } from 'react'

import './App.css'
import { SignIn } from './components/SignIn'
import Telegraph from './API/Telegraph'
import { UserProfile } from './components/UserProfile'
import { ArticleList } from './components/ArticleList'

function App() {
  const [identified, setIdentified] = useState(false)
  const [user, setUser] = useState({})
  const [userFind, setUserFind] = useState(false)
  const [createArticle, setCreateArticle] = useState(false)
  const [articleList, setArticleList] = useState([])

  const getPageList = async (token) => {
    return await Telegraph.getPageList(token)
  }

  const getUser = async (token) => {
    const response = await Telegraph.singIn(token)
    if (response.ok) {
      setUser({ ...response.result, token: token })
      setIdentified(true)
      const pageResponse = await getPageList(token)
      setArticleList([...pageResponse.result.pages])
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
    setCreateArticle(response.ok)
  }

  useEffect( () => {
    if(createArticle){
       
      const newArticleListCreate = async () =>{
        const pageResponse = await getPageList(user.token)
        setArticleList( [...pageResponse.result.pages])
      }
      newArticleListCreate()
      setCreateArticle(false)
    }
  },[createArticle])
 
  return (
    <div className="app">
      {!identified ? (
        <SignIn
          getUser={getUser}
          notFound={userFind && 'Пользователь не найден'}
        />
      ) : (
        <div className="app-cont">
          <ArticleList articleList={articleList} postArticle={postArticle} />
          <UserProfile user={user} />
        </div>
      )}
    </div>
  )
}

export default App
