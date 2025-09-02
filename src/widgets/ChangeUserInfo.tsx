import { useState, type ChangeEvent } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { updateUserInfo, userActions } from '@entities/User'
import { MyButton, MyForm, MyInput } from '@shared/ui'
import { useAppDispatch, useAppSelector } from '@shared/hooks'
import { getUserToken } from '@shared/services/localStorage/getUserToken'
import { generateLink } from '@/shared/services/generateLink'

export const ChangeUserInfo = () => {
  const dispatch = useAppDispatch()

  const { userValues } = useAppSelector((state) => state.user)

  const access_token = getUserToken()

  const [newUserInfo, setNewUserInfo] = useState({
    short_name: '',
    author_name: '',
    author_url: '',
  })

  const handleGetNewUserInfo = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(userActions.setUserModal(false))
    const author_url = generateLink(newUserInfo.author_url)
    dispatch(updateUserInfo({ ...newUserInfo, author_url, access_token }))
  }

  return (
    <MyForm onSubmit={handleGetNewUserInfo} canClose={true} active={userValues.userModal}>
      <p>Введиите те значения - которые, хотите поменять </p>
      <MyInput
        type="text"
        placeholder="short_name"
        value={newUserInfo.short_name}
        onChange={(e) => setNewUserInfo({ ...newUserInfo, short_name: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="author_name"
        value={newUserInfo.author_name}
        onChange={(e) => setNewUserInfo({ ...newUserInfo, author_name: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="author_url"
        value={newUserInfo.author_url}
        onChange={(e) => setNewUserInfo({ ...newUserInfo, author_url: e.target.value })}
      />
      <MyButton>Отправить</MyButton>
    </MyForm>
  )
}
