import type { DetailedHTMLProps } from 'react';
import cl from './MyInput.module.css';
export const MyInput = (props: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return <input className={cl.MyInput} {...props} />;
};
