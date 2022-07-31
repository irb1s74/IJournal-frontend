import React, { FC, memo } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { IoPersonAdd } from 'react-icons/io5';
import ProfileTabs from '../Tabs/Tabs';
import { Banner, Header, Info, WrapperAvatar } from './Header.styled';
import Avatar from '../../UI/Avatar/Avatar';
import { IUser } from '../../../models/IUser';

interface ProfileHeaderProps {
  subscribers: number;
  user: IUser;
  isSubscriber: boolean;
  handleToSubscribe: () => void;
}

const UserHeader: FC<ProfileHeaderProps> = ({
  user,
  subscribers,
  isSubscriber,
  handleToSubscribe,
}) => {
  return (
    <Header>
      <Banner bg={user.banner} />
      <Info>
        <WrapperAvatar>
          <Box sx={{ display: 'flex', position: 'relative' }}>
            <Avatar user={user} size='80' />
          </Box>
        </WrapperAvatar>
        <Stack
          sx={{ m: '20px 0' }}
          direction='row'
          justifyContent='space-between'
        >
          <Typography variant='h4'>Irb1s</Typography>
          <Stack direction='row' spacing={2}>
            <Button
              onClick={handleToSubscribe}
              variant={isSubscriber ? 'outlined' : 'contained'}
              startIcon={!isSubscriber && <IoPersonAdd />}
            >
              {isSubscriber ? 'Отписаться' : 'Подписаться'}
            </Button>
          </Stack>
        </Stack>
        <Typography sx={{ mb: '10px' }}>{user.aboutUser}</Typography>
        <Typography variant='subtitle2' textAlign='left'>
          Подписчики: <b> {subscribers} </b>
        </Typography>
        <ProfileTabs />
      </Info>
    </Header>
  );
};

export default memo(UserHeader);
