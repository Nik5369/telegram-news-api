import { useState } from "react"
import { MyForm } from "./UI/form/MyForm"
import { MyInput } from "./UI/input/MyInput"
import { MyButton } from "./UI/button/MyButton"

export const ChangeUserInfo = ({active, setActive, getNewUserInfo, setChangeUserInfoModal}) => {
    const [newUserInfo, setNewUserInfo] = useState({
        short_name: '',
        author_name: '',
        author_url: '',
    })

    const getNewUserIngo = (e) => {
        e.preventDefault()
        setChangeUserInfoModal(false)
        getNewUserInfo(newUserInfo)
    }

  return (
    <MyForm onSubmit={getNewUserIngo} canClose={true} active={active} setActive={setActive}>
      <MyInput type="text" placeholder="short_name" value={newUserInfo.short_name} onChange={(e) => setNewUserInfo({...newUserInfo, short_name : e.target.value})} />
      <MyInput type="text" placeholder="author_name" value={newUserInfo.author_name} onChange={(e) => setNewUserInfo({...newUserInfo, author_name : e.target.value})} />
      <MyInput type="text" placeholder="author_url" value={newUserInfo.author_url} onChange={(e) => setNewUserInfo({...newUserInfo, author_url : e.target.value})} />
      <MyButton>Отправить</MyButton>
    </MyForm>
  )
}