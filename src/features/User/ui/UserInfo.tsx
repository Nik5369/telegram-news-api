import { USER_NAMES, type TUser } from '@entities/User';
import { useAppSelector } from '@shared/hooks';
import { v4 as uuidv4 } from 'uuid';
import { UserInfoItem } from './UserInfoItem';

export const UserInfo = () => {
  const { userValues } = useAppSelector((state) => state.user);

  return (Object.entries(userValues) as [keyof TUser, string][]).map(([fieldKey, fieldValue]) => {
    const key = uuidv4();

    return <UserInfoItem key={key} fieldKey={USER_NAMES[fieldKey]} fieldValue={fieldValue} />;
  });
};
