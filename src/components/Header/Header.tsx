import React, { FC, memo, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoMenu, IoWine } from 'react-icons/io5';
import Search from '../UI/Search/Search';
import { IAppSetMenu } from '../../store/reducers/appReducer/types';
import HeaderMenu from './widget/Menu';
import { Button } from '@mui/material';
import { HeaderBox } from './Header.styled';

export const Header: FC<{
  toggleMenu: () => IAppSetMenu;
}> = memo(({ toggleMenu }) => {
  return (
    <HeaderBox>
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
          <Button variant='contained' color='secondary'>
            Новая Запись
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </HeaderBox>
  );
});

export default Header;
