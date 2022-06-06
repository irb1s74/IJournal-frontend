import React, { FC, useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import {
  IoChatboxEllipses,
  IoEllipsisVerticalSharp,
  IoNotifications,
} from 'react-icons/io5';
import { Button } from '@mui/material';
import HeaderList from './List';
import { EModal } from '../../models/EModal';
import { IUser } from '../../models/IUser';
import Avatar from '../UI/Avatar/Avatar';

interface HeaderMenuProps {
  isAuth: boolean;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  handleSignOut: () => void;
  user: IUser;
}

const HeaderMenu: FC<HeaderMenuProps> = ({
  isAuth,
  handleOpenModal,
  handleSignOut,
  user,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = useCallback(() => setAnchorEl(null), []);

  if (!isAuth) {
    return (
      <Button
        onClick={handleOpenModal(EModal.authModal, EModal.authModal, {})}
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
          <Avatar user={user} />
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
        handleSignOut={handleSignOut}
      />
    </>
  );
};

export default HeaderMenu;
