import React, { FC, memo } from 'react';
import { Menu, MenuItem } from '@mui/material';

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
      // id={menuId}
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

export default memo(HeaderList);
