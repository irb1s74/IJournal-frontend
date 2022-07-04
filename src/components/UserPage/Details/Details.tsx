import React, { memo } from 'react';
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import Avatar from '../../UI/Avatar/Avatar';
import { IoPersonAdd } from 'react-icons/io5';

const UserDetails = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: '8px 16px',
          borderRadius: '12px',
        }}
      >
        <Typography sx={{ display: 'inline-block' }} variant='h6'>
          Подписчики
        </Typography>
        <Typography
          sx={{ display: 'inline-block', ml: '10px' }}
          variant='subtitle2'
        >
          577
        </Typography>
        <List>
          <Grid container spacing={2}>
            {Array(8)
              .fill(0)
              .map((item, index) => (
                <Grid key={index} item xs={6}>
                  <ListItem
                    sx={{
                      width: '100%',
                    }}
                    alignItems='center'
                  >
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText primary='Brunch this weekend?' />

                    <Button
                      variant='contained'
                      sx={{ p: '10px', minWidth: '26px' }}
                    >
                      <IoPersonAdd />
                    </Button>
                  </ListItem>
                  <Divider variant='inset' component='li' />
                </Grid>
              ))}
          </Grid>
        </List>
        <Link href='user/' underline='none'>
          <Typography sx={{ mt: '20px' }} variant='subtitle1'>
            Показать всех
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          mt: '18px',
          bgcolor: 'background.paper',
          p: '8px 16px',
          borderRadius: '12px',
        }}
      >
        <Typography sx={{ display: 'inline-block' }} variant='h6'>
          Подписки
        </Typography>
        <Typography
          sx={{ display: 'inline-block', ml: '10px' }}
          variant='subtitle2'
        >
          577
        </Typography>
        <List>
          <Grid container spacing={2}>
            {Array(8)
              .fill(0)
              .map((item, index) => (
                <Grid key={index} item xs={6}>
                  <ListItem
                    sx={{
                      width: '100%',
                    }}
                    alignItems='center'
                  >
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText primary='Brunch this weekend?' />

                    <Button
                      variant='contained'
                      sx={{ p: '10px', minWidth: '26px' }}
                    >
                      <IoPersonAdd />
                    </Button>
                  </ListItem>
                  <Divider variant='inset' component='li' />
                </Grid>
              ))}
          </Grid>
        </List>
        <Link href='user/' underline='none'>
          <Typography sx={{ mt: '20px' }} variant='subtitle1'>
            Показать всех
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default memo(UserDetails);
