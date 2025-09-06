import { Button as MuiButton, type ButtonProps } from '@mui/material';
import type { FC } from 'react';

type TProps = {} & ButtonProps;

export const Button: FC<TProps> = (props) => {
  const { name, ...restProps } = props;

  return <MuiButton {...restProps} />;
};
