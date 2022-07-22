import React, { FC } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material';
import Avatar from '../Avatar/Avatar';
import { ISubscription } from '../../../models/ISubscription';
import { ISubscriber } from '../../../models/ISubscriber';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

interface ModalListProps {
  closeModal: () => void;
  option: any;
}

const ModalList: FC<ModalListProps> = ({ closeModal, option }) => {
  return (
    <Dialog
      open
      fullWidth
      maxWidth='xs'
      onClose={closeModal}
      scroll='paper'
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
    >
      <DialogTitle id='scroll-dialog-title'>
        <Stack justifyContent='space-between' direction='row'>
          {option?.nameBox}
          <Box>
            <IconButton onClick={closeModal}>
              <IoClose />
            </IconButton>
          </Box>
        </Stack>
      </DialogTitle>
      <Divider />
      <List>
        {option?.users.map(
          (user: ISubscription | ISubscriber, index: number) => (
            <Link
              onClick={closeModal}
              key={index}
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
          )
        )}
      </List>
    </Dialog>
  );
};

export default ModalList;
