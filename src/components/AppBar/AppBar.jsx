import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

export const HeaderAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <AppBar position="sticky" component="header" sx={{
        fontfamily: 'Raleway',
      }}>
        <Container maxWidth={'sm'}>
          <Toolbar disableGutters aria-label="ToolBar"
            sx={{
              'justifyContent': 'space-between',
            }}
          >
        <Navigation />
            {isLoggedIn && <UserMenu />}
          </Toolbar>  
          </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
