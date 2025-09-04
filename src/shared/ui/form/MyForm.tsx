import cl from './MyForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@/entities/User/model/UserSlice';
import type { DetailedHTMLProps, FC, FormHTMLAttributes } from 'react';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

type TProps = {
  active: any;
  children: any;
  canClose: any;
} & FormHTMLAttributes<HTMLFormElement>;

export const MyForm: FC<TProps> = (props) => {
  const { active, children, canClose, ...restProps } = props;
  const dispatch = useDispatch();

  const { userModal } = useAppSelector((state) => state.user);

  return (
    <div
      className={`${cl.backForFormCont} ${userModal || active ? cl.active : ''}`}
      onClick={() => {
        if (canClose) {
          dispatch(userActions.setUserModal(false));
        }
      }}
    >
      <form onClick={(e) => e.stopPropagation()} className={cl.backForForm} {...restProps}>
        {children}
      </form>
    </div>
  );
};
