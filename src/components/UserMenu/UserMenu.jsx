import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Box, Accost, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box>
      <Accost> Welcome, {user.name}!</Accost>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </Box>
  );
};
