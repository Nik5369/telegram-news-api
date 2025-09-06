import { userActions } from '@entities/User/model/UserSlice';
import { UserInfo } from '@features/User/ui/UserInfo';
import { Grid, useTheme } from '@mui/material';
import { useAppDispatch } from '@shared/hooks';
import { Button } from '@shared/ui/Button/Button';

export const UserProfile = () => {
  const dispatch = useAppDispatch();

  const theme = useTheme();

  return (
    <Grid
      container
      gap={4}
      direction="column"
      wrap="nowrap"
      bgcolor={theme.palette.background.paper}
      p={2}
      size={6}
      borderRadius={2}
    >
      <UserInfo />

      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          dispatch(userActions.setUserModal(true));
        }}
      >
        Изменить данные
      </Button>
    </Grid>
  );
};
