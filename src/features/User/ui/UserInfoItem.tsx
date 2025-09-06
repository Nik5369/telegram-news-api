import { Grid, useTheme } from '@mui/material';
import { TextWithTooltip } from '@shared/ui';
import type { FC } from 'react';

type TProps = {
  fieldKey: string;
  fieldValue: string;
};
export const UserInfoItem: FC<TProps> = (props) => {
  const { fieldKey, fieldValue } = props;

  const theme = useTheme();

  return (
    <Grid container direction="column" py={2} px={4} borderTop={1} borderBottom={1}>
      <TextWithTooltip variant="body1" color={theme.palette.primary.main}>
        {fieldKey} :
      </TextWithTooltip>
      <TextWithTooltip variant="subtitle1" fontSize={'1.5rem'} pl={5}>
        {fieldValue}
      </TextWithTooltip>
    </Grid>
  );
};
