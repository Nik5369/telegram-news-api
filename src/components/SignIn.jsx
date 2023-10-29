import { useState } from 'react'
import { MyButton } from './UI/button/MyButton'
import { MyInput } from './UI/input/MyInput'
import { MyForm } from './UI/form/MyForm'
import { useDispatch } from 'react-redux'
import { getUserValues } from '../features/UserSlice'

export const SignIn = ({ notFound, active }) => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')

  const getValue = (e) => {
    e.preventDefault()
    dispatch(getUserValues(inputValue))
  }

  return (
    <MyForm onSubmit={getValue} active={active}>
      <MyInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Введите ваш токен"
      />
      {notFound && <div>{notFound}</div>}
      <MyButton>Отправить</MyButton>
    </MyForm>
  )
}
