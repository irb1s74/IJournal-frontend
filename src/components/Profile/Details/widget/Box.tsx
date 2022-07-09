import React, { FC } from 'react';
import {
  Box,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from '@mui/material';
import Avatar from '../../../UI/Avatar/Avatar';
import { Link } from 'react-router-dom';
import { ISubscriber } from '../../../../models/ISubscriber';
import { ISubscription } from '../../../../models/ISubscription';

interface ProfileDetailsBoxProps {
  nameBox: string;
  users: ISubscriber[] | ISubscription[];
}

const ProfileDetailsBox: FC<ProfileDetailsBoxProps> = ({ users, nameBox }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: '8px 16px',
        borderRadius: '12px',
        mb: '10px',
      }}
    >
      <Typography sx={{ display: 'inline-block' }} variant='h6'>
        {nameBox}
      </Typography>
      <Typography
        sx={{ display: 'inline-block', ml: '10px' }}
        variant='subtitle2'
      >
        {users.length}
      </Typography>
      <List>
        <Grid container spacing={2}>
          {users.map((user, index) => (
            <Grid key={index} item xs={3}>
              <Link
                to={`/user/${
                  'subscription' in user
                    ? user.subscription.id
                    : user.subscriber.id
                }`}
              >
                <ListItemButton alignItems='center'>
                  <ListItemAvatar>
                    <Avatar
                      user={
                        'subscription' in user
                          ? user.subscription
                          : user.subscriber
                      }
                    />
                  </ListItemAvatar>
                  <Typography sx={{ width: '100%' }} variant='subtitle1'>
                    {'subscriber' in user
                      ? user.subscriber.nickname
                      : user.subscription.nickname}
                  </Typography>
                </ListItemButton>
              </Link>
            </Grid>
          ))}
        </Grid>
      </List>
      <Link to='profile'>
        <Typography sx={{ mt: '20px' }} variant='subtitle1'>
          Показать всех
        </Typography>
      </Link>
    </Box>
  );
};
export default ProfileDetailsBox;
