import React, { memo } from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Avatar from '../../UI/Avatar/Avatar';
import { IoPersonAdd } from 'react-icons/io5';

const UserDetails = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <Typography sx={{ ml: '16px', display: 'inline-block' }} variant='h6'>
        Подписчики
      </Typography>
      <Typography
        sx={{ ml: '10px', display: 'inline-block' }}
        variant='subtitle2'
      >
        577
      </Typography>
      <List
        sx={{
          width: '100%',
        }}
      >
        {Array(10)
          .fill(0)
          .map(() => (
            <>
              <ListItem
                sx={{
                  width: '100%',
                  maxWidth: '360px',
                  bgcolor: 'background.paper',
                }}
                alignItems='flex-start'
              >
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary='Brunch this weekend?'
                />
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <IoPersonAdd />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <Divider variant='inset' component='li' />
            </>
          ))}
      </List>
    </Box>
  );
};

export default memo(UserDetails);
