import { useState, type ChangeEvent, type EventHandler, type FC } from 'react'
import { useDispatch } from 'react-redux'
import { getUserValues } from '@entities/User/model/asyncThunks/getUsersValue'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { MyButton, MyForm, MyInput } from '@shared/ui'

type TProps = {
  active: boolean
}

export const SignIn: FC<TProps> = ({ active }) => {
  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState('')

  const getValue = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(getUserValues(inputValue))
  }

  return (
    <MyForm onSubmit={getValue} active={active} canClose={false}>
      <MyInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Введите ваш токен" />
      <MyButton>Отправить</MyButton>
    </MyForm>
  )
}
