import React, { FC, memo, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoMenu, IoWine } from 'react-icons/io5';
import Search from '../../components/UI/Search/Search';
import { IAppSetMenu } from '../../store/reducers/appReducer/types';
import { useDispatch } from 'react-redux';
import { AppSetMenu } from '../../store/reducers/appReducer/actions';
import HeaderMenu from '../../components/Header/Menu';

const Header: FC<{
  toggleMenu: () => IAppSetMenu;
}> = memo(({ toggleMenu }) => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={toggleMenu}
          >
            <IoMenu />
          </IconButton>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
              alignItems: 'center',
            }}
          >
            <Typography variant='h5' component='div' noWrap>
              VIBE
            </Typography>
            <IoWine size={24} color='#DA4A5E' />
          </Box>
          <Search />
          <Box sx={{ flexGrow: 1 }} />
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const ActionToggleMenu = useCallback(() => dispatch(AppSetMenu()), []);
  return <Header toggleMenu={ActionToggleMenu} />;
};
export default HeaderContainer;
