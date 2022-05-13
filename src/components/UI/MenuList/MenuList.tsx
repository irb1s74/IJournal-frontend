import React, { FC, memo } from 'react';
import { ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';

interface MenuListProps {
  children: React.ReactNode;
  isMenuListOpen: boolean;
  handleMenuListClose: () => void;
  anchorEl: null | HTMLElement;
}

const MenuList: FC<MenuListProps> = ({
  isMenuListOpen,
  children,
  handleMenuListClose,
  anchorEl,
}) => {
  return (
    <Menu
      id='menu-list'
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={isMenuListOpen}
      onClose={handleMenuListClose}
    >
      {children}
    </Menu>
  );
};

export default memo(MenuList);
