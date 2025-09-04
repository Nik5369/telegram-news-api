import { v4 as uuidv4 } from 'uuid';
import { UserProfileString } from './UserProfileString';

import { userActions } from '@entities/User/model/UserSlice';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { MyButton } from '@shared/ui';
import { useAppDispatch } from '@/shared/hooks';

export const UserProfile = () => {
  const dispatch = useAppDispatch();

  const { userValues } = useAppSelector((state) => state.user);

  return (
    <div>
      <div className="change-user-info-btn">
        <MyButton
          onClick={() => {
            dispatch(userActions.setUserModal(true));
          }}
        >
          Изменить данные
        </MyButton>
      </div>
      {Object.entries(userValues).map((el) => {
        const fieldKey = el[0].split('_').join(' ');
        const fieldValue = el[1];
        const key = uuidv4();

        return <UserProfileString key={key} fieldKey={fieldKey} fieldValue={fieldValue} />;
      })}
    </div>
  );
};
