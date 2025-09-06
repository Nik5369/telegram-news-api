import { useState, type ChangeEvent } from 'react';

import { updateUserInfo, userActions } from '@entities/User';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { generateLink } from '@shared/services/generateLink';
import { getUserToken } from '@shared/services/localStorage/getUserToken';
import { Input, MyForm } from '@shared/ui';
import { Button } from '@shared/ui/Button/Button';

export const ChangeUserInfo = () => {
  const dispatch = useAppDispatch();

  const { userModal } = useAppSelector((state) => state.user);

  const access_token = getUserToken();

  const [newUserInfo, setNewUserInfo] = useState({
    short_name: '',
    author_name: '',
    author_url: '',
  });

  const handleGetNewUserInfo = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(userActions.setUserModal(false));
    const author_url = generateLink(newUserInfo.author_url);
    dispatch(updateUserInfo({ ...newUserInfo, author_url, access_token }));
  };

  return (
    <MyForm onSubmit={handleGetNewUserInfo} canClose={true} active={userModal}>
      <p>Введиите те значения - которые, хотите поменять </p>

      <Input
        type="text"
        name="short_name"
        placeholder="short_name"
        value={newUserInfo.short_name}
        onChange={(e) => setNewUserInfo({ ...newUserInfo, short_name: e.target.value })}
      />

      <Input
        type="text"
        name="author_name"
        placeholder="author_name"
        value={newUserInfo.author_name}
        onChange={(e) => setNewUserInfo({ ...newUserInfo, author_name: e.target.value })}
      />

      <Input
        type="text"
        name="author_url"
        placeholder="author_url"
        value={newUserInfo.author_url}
        onChange={(e) => setNewUserInfo({ ...newUserInfo, author_url: e.target.value })}
      />

      <Button variant="contained" type="submit">
        Отправить
      </Button>
    </MyForm>
  );
};
