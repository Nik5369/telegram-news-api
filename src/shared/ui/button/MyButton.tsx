import { Button as MuiButton, type ButtonProps } from '@mui/material';
import type { ButtonHTMLAttributes, FC } from 'react';
import cl from './MyButton.module.css';

export const MyButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button className={cl.MyButton} {...props}>
      {children}
    </button>
  );
};

type TProps = {} & ButtonProps;

export const Button: FC<TProps> = (props) => {
  const { name, ...restProps } = props;

  return <MuiButton {...restProps} />;
};
