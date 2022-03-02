import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import {
  IoMenu,
  IoNotifications,
  IoEllipsisVerticalSharp,
  IoMail,
  IoWine,
} from 'react-icons/io5';
import { Avatar } from '@mui/material';
import Search from '../Search/Search';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: 2 }}
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
              <IoMail />
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
            // aria-controls={mobileMenuId}
            // onClick={handleMobileMenuOpen}
          >
            <IoEllipsisVerticalSharp />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
