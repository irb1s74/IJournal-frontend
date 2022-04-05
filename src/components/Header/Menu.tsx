import React, { FC, useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import {
  IoChatboxEllipses,
  IoEllipsisVerticalSharp,
  IoNotifications,
} from 'react-icons/io5';
import { Avatar, Button } from '@mui/material';
import HeaderList from './List';
import { EModal } from '../../models/EModal';

interface HeaderMenuProps {
  isAuth: boolean;
  ActionOpenModal: (id: string, type: EModal, optional: any) => void;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ isAuth, ActionOpenModal }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = useCallback(() => setAnchorEl(null), []);
  if (!isAuth) {
    return (
      <Button
        onClick={() => ActionOpenModal('1', EModal.authModal, {})}
        variant='filter'
        color='secondary'
      >
        Войти
      </Button>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
          alignContent: 'center',
        }}
      >
        <IconButton size='large' aria-label='show new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <IoChatboxEllipses />
          </Badge>
        </IconButton>
        <IconButton
          size='large'
          aria-label='show new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <IoNotifications />
          </Badge>
        </IconButton>
        <IconButton
          size='large'
          aria-label='show new notifications'
          color='inherit'
          onClick={handleProfileMenuOpen}
        >
          <Avatar
            alt='Remy Sharp'
            src='https://marscode.s3.eu-north-1.amazonaws.com/assets/img/nft/1625487699456.gif'
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: {
            xs: 'flex',
            md: 'none',
          },
        }}
      >
        <IconButton
          size='large'
          aria-label='show more'
          aria-haspopup='true'
          color='inherit'
          onClick={handleProfileMenuOpen}
        >
          <IoEllipsisVerticalSharp />
        </IconButton>
      </Box>
      <HeaderList
        isMenuOpen={isMenuOpen}
        anchorEl={anchorEl}
        handleMenuClose={handleProfileMenuClose}
      />
    </>
  );
};

export default HeaderMenu;
