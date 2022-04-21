import React, { FC, memo } from 'react';
import { ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import {
  IoPersonCircleSharp,
  IoLogOut,
  IoCogSharp,
  IoDocumentSharp,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface IHeaderList {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  anchorEl: null | HTMLElement;
  handleSignOut: () => void;
}

const HeaderList: FC<IHeaderList> = ({
  isMenuOpen,
  handleMenuClose,
  anchorEl,
  handleSignOut,
}) => {
  const navigate = useNavigate();
  const toNavigate = (link: string) => {
    return () => {
      handleMenuClose();
      navigate(link);
    };
  };
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
      <MenuItem onClick={toNavigate('/profile')}>
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
      </MenuItem>
      <MenuItem onClick={handleSignOut}>
        <ListItemIcon sx={{ color: '#29253C' }}>
          <IoLogOut />
        </ListItemIcon>
        <Typography variant='body2'>Выйти</Typography>
      </MenuItem>
    </Menu>
  );
};

export default memo(HeaderList);
