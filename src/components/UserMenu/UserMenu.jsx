import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
// import { AccountCircle } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';

export const UserMenu = () => {

  const dispatch = useDispatch();
  const name = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography component="h4" sx={{fontfamily: 'Raleway',}}>{name}</Typography>
      {isLoggedIn && (
        <div>
          <IconButton
            size="medium"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            sx={{
              backgroundColor: 'white',
              marginLeft: '5px',
            }}
          >
            {/* <AccountCircle /> */}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => dispatch(logOut())}>Log out</MenuItem>
          </Menu>
        </div>
      )}
    </Box>
  );
};  