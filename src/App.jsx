import { useEffect, useState } from 'react'

import './App.css'
import { SignIn } from './components/SignIn'
import Telegraph from './API/Telegraph'
import { UserProfile } from './components/UserProfile'
import { ArticleList } from './components/ArticleList'
import { ChangeUserInfo } from './components/ChangeUserInfo'

function App() {
  const [identified, setIdentified] = useState(false)
  const [user, setUser] = useState({})
  const [userFind, setUserFind] = useState(false)
  const [createArticle, setCreateArticle] = useState(false)
  const [articleList, setArticleList] = useState([])
  const [changeUserInfoModal, setChangeUserInfoModal] = useState(false)

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

  const getNewUserInfo = async (newUserInfo) => {

    const token = user.token
    const newUserInfoToken = {
      token,
      ...newUserInfo,
    }
    const responseData = await Telegraph.newUserIngo(newUserInfoToken)
    if(responseData.ok){
      const response = responseData.result
      console.log(responseData.ok)
      setUser({...user, short_name: response.short_name, author_name:  response.author_name, author_url: response.author_url })
      setCreateArticle(responseData.ok)
    }
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
          active={!identified}
          getUser={getUser}
          notFound={userFind && 'Пользователь не найден'}
        />
      ) : (
        <div className="app-cont">
          <ArticleList articleList={articleList} postArticle={postArticle} />
          <UserProfile user={user} setChangeUserInfoModal={setChangeUserInfoModal} />
        </div>
      )}
      <ChangeUserInfo setChangeUserInfoModal={setChangeUserInfoModal} getNewUserInfo={getNewUserInfo} active={changeUserInfoModal} setActive={setChangeUserInfoModal}/>
    </div>
  )
}

export default App
