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
import { ISubscriber } from '../../../../models/ISubscriber';
import { ISubscription } from '../../../../models/ISubscription';
import { Link } from 'react-router-dom';
import { EModal } from '../../../../models/EModal';

interface UserBoxProps {
  nameBox: string;
  users: ISubscriber[] | ISubscription[];
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
}

const UserBox: FC<UserBoxProps> = ({ users, nameBox, handleOpenModal }) => {
  const shortUser = users.slice(0, 4);

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
          {shortUser.map((user, index) => (
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
      <Typography
        onClick={handleOpenModal(EModal.modalList, EModal.modalList, {
          users,
          nameBox,
        })}
        sx={{ mt: '20px', cursor: 'pointer' }}
        variant='subtitle1'
      >
        Показать всех
      </Typography>
    </Box>
  );
};

export default UserBox;
