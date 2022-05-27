import React, { FC, memo } from 'react';
import { Menu } from '@mui/material';

interface DropListProps {
  children: React.ReactNode;
  isDropListOpen: boolean;
  handleDropListClose: () => void;
  anchorEl: null | HTMLElement;
}

const DropList: FC<DropListProps> = ({
  isDropListOpen,
  children,
  handleDropListClose,
  anchorEl,
}) => {
  return (
    <Menu
      id='drop-list'
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
      open={isDropListOpen}
      onClose={handleDropListClose}
    >
      {children}
    </Menu>
  );
};

export default memo(DropList);
