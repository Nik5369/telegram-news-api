import { getUserValues } from '@entities/User/model/asyncThunks/getUsersValue';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { Input, MyForm } from '@shared/ui';
import { Button } from '@shared/ui/button/MyButton';
import { useState, type ChangeEvent, type FC } from 'react';

type TProps = {
  active: boolean;
};

export const SignIn: FC<TProps> = ({ active }) => {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');

  const getValue = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(getUserValues(inputValue));
  };

  return (
    <MyForm onSubmit={getValue} active={active} canClose={false}>
      <Input
        name="token"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Введите ваш токен"
      />
      <Button type="submit">Отправить</Button>
    </MyForm>
  );
};
