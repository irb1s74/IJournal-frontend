import React, { FC, memo } from 'react';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { IoChatboxEllipses, IoPersonAdd } from 'react-icons/io5';
import ProfileTabs from '../Tabs/Tabs';
import { Banner, Header, Info, PenIcon, WrapperAvatar } from './Header.styled';
import Avatar from '../../UI/Avatar/Avatar';
import { IUser } from '../../../models/IUser';

interface ProfileHeaderProps {
  user: IUser;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <Header>
      <Banner />
      <Info>
        <WrapperAvatar>
          <IconButton sx={{ position: 'relative' }} size='large'>
            <Avatar user={user} profileRender />
            <PenIcon className='icon-pen' size='18' />
          </IconButton>
        </WrapperAvatar>
        <Stack
          sx={{ m: '20px 0' }}
          direction='row'
          justifyContent='space-between'
        >
          <Typography variant='h4'>Irb1s</Typography>
          <Stack direction='row' spacing={2}>
            <Button variant='outlined' startIcon={<IoChatboxEllipses />}>
              Написать
            </Button>
            <Button variant='contained' startIcon={<IoPersonAdd />}>
              Подписаться
            </Button>
          </Stack>
        </Stack>
        <Typography sx={{ mb: '10px' }}>
          Suspendisse lobortis nunc tortor, a dapibus lorem euismod nec.
        </Typography>
        <Typography variant='subtitle1' textAlign='left'>
          650 подписчиков
        </Typography>
        <ProfileTabs />
      </Info>
    </Header>
  );
};

export default memo(ProfileHeader);
