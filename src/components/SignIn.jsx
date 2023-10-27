import { useState } from 'react'
import { MyButton } from './UI/button/MyButton'
import { MyInput } from './UI/input/MyInput'

export const SignIn = ({ getUser, notFound }) => {
  const [inputValue, setInputValue] = useState('')

  const getValue = (e) => {
    e.preventDefault()
    getUser(inputValue)
  }

  return (
    <div className="sign-in-cont">
      <form onSubmit={getValue}>
        <MyInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Введите ваш токен"
        />
        {notFound && <div>{notFound}</div>}
        <MyButton>Отправить</MyButton>
      </form>
    </div>
  )
}
