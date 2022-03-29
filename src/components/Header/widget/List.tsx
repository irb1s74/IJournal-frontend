import React, { FC, memo } from 'react';
import { ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import {
  IoPersonCircleSharp,
  IoLogOut,
  IoCogSharp,
  IoDocumentSharp,
} from 'react-icons/io5';

interface IHeaderList {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  anchorEl: null | HTMLElement;
}
const HeaderList: FC<IHeaderList> = ({
  isMenuOpen,
  handleMenuClose,
  anchorEl,
}) => {
  return (
    <Menu
      id='header-list'
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon sx={{ color: '#29253C' }}>
          <IoPersonCircleSharp />
        </ListItemIcon>
        <Typography variant='body2'>Профиль</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon sx={{ color: '#29253C' }}>
          <IoDocumentSharp />
        </ListItemIcon>
        <Typography variant='body2'>Черновики</Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon sx={{ color: '#29253C' }}>
          <IoCogSharp />
        </ListItemIcon>
        <Typography variant='body2'>Настройки</Typography>
      </MenuItem>{' '}
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon sx={{ color: '#29253C' }}>
          <IoLogOut />
        </ListItemIcon>
        <Typography variant='body2'>Выйти</Typography>
      </MenuItem>
    </Menu>
  );
};

export default memo(HeaderList);
