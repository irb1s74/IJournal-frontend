import React, { FC, memo } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { IoChatboxEllipses, IoPersonAdd } from 'react-icons/io5';
import ProfileTabs from '../Tabs/Tabs';
import { Banner, Header, Info, WrapperAvatar } from './Header.styled';
import Avatar from '../../UI/Avatar/Avatar';
import { IUser } from '../../../models/IUser';

interface ProfileHeaderProps {
  subscribers: number;
  user: IUser;
}

const UserHeader: FC<ProfileHeaderProps> = ({ user, subscribers }) => {
  return (
    <Header>
      <Banner bg={user.banner} />
      <Info>
        <WrapperAvatar>
          <Box>
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
            <Button variant='contained' startIcon={<IoPersonAdd />}>
              Подписаться
            </Button>
          </Stack>
        </Stack>
        <Typography sx={{ mb: '10px' }}>
          Suspendisse lobortis nunc tortor, a dapibus lorem euismod nec.
        </Typography>
        <Typography variant='subtitle2' textAlign='left'>
          Подписчики: <b> {subscribers} </b>
        </Typography>
        <ProfileTabs />
      </Info>
    </Header>
  );
};

export default memo(UserHeader);
