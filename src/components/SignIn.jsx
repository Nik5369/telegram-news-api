import { useState } from 'react'
import { MyButton } from './UI/button/MyButton'
import { MyInput } from './UI/input/MyInput'
import { MyForm } from './UI/form/MyForm'

export const SignIn = ({ getUser, notFound,active}) => {
  const [inputValue, setInputValue] = useState('')

  const getValue = (e) => {
    e.preventDefault()
    getUser(inputValue)
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
