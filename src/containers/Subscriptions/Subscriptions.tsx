import React from 'react';
import { BoxSubscribe, ButtonSubscribe } from './Subscriptions.styled';
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { IoImage, IoCheckmark } from 'react-icons/io5';

const Subscriptions = () => {
  return (
    <BoxSubscribe>
      <List
        sx={{
          width: '100%',
          maxWidth: 600,
          bgcolor: 'background.paper',
        }}
      >
        <Typography sx={{ ml: '12px' }} variant='h6'>
          Подписки
        </Typography>
        <Divider component='li' />
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <>
              <ListItem sx={{ mt: '22px' }} key={index}>
                <ListItemAvatar>
                  <Avatar
                    src='https://leonardo.osnova.io/74355c2a-cf87-ffba-aebf-45ae3bc8d1d8/-/scale_crop/200x200/-/format/webp/'
                    alt='Avatar'
                  >
                    <IoImage />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Photos' />
                <ButtonSubscribe variant='contained'>
                  <IoCheckmark />
                </ButtonSubscribe>
              </ListItem>
              <Divider variant='inset' component='li' />
            </>
          ))}
      </List>
    </BoxSubscribe>
  );
};

const ContainerSubscriptions = () => {
  return <Subscriptions />;
};
export default ContainerSubscriptions;
