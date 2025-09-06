import { TextField, type TextFieldProps } from '@mui/material';
import type { FC } from 'react';

type TProps = {
  name: string;
} & TextFieldProps;

export const Input: FC<TProps> = (props) => {
  const { name, ...restProps } = props;

  return <TextField name="name" {...restProps} />;
};
