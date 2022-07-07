import React, { FC, memo, useEffect } from 'react';
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
import { useParams } from 'react-router-dom';
import { ISubscriber } from '../../../models/ISubscriber';
import { ISubscription } from '../../../models/ISubscription';

interface UserDetailsProps {
  handleGetUserSubscriptions: (userId: number) => void;
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
}

const UserDetails: FC<UserDetailsProps> = ({
  handleGetUserSubscriptions,
  subscriptions,
  subscribers,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      handleGetUserSubscriptions(+id);
    }
  }, []);
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
          {subscribers.length}
        </Typography>
        <List>
          <Grid container spacing={2}>
            {subscribers.map((subscriber, index) => (
              <Grid key={index} item xs={6}>
                <ListItem
                  sx={{
                    width: '100%',
                  }}
                  alignItems='center'
                >
                  <ListItemAvatar>
                    <Avatar user={subscriber.subscriber} />
                  </ListItemAvatar>
                  <ListItemText primary={subscriber.subscriber.nickname} />

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
          {subscriptions.length}
        </Typography>
        <List>
          <Grid container spacing={2}>
            {subscriptions.map((subscription, index) => (
              <Grid key={index} item xs={6}>
                <ListItem
                  sx={{
                    width: '100%',
                  }}
                  alignItems='center'
                >
                  <ListItemAvatar>
                    <Avatar user={subscription.subscription} />
                  </ListItemAvatar>
                  <ListItemText primary={subscription.subscription.nickname} />

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
