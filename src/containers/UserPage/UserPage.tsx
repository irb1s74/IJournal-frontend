import React from 'react';
import {
  HeaderAvatar,
  HeaderBanner,
  HeaderInfo,
  PageHeader,
  PageWrapper,
} from './UserPage.styled';
import { Banner, Info, ProfileAvatar } from '../Profile/Profile.styled';
import { Button, Stack, Typography } from '@mui/material';
import { IoChatboxEllipses, IoPersonAdd } from 'react-icons/io5';
import ProfileTabs from '../../components/Profile/Tabs/Tabs';

const UserPage = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <HeaderBanner />
        <HeaderInfo>
          <HeaderAvatar
            alt='irb1s'
            src='https://marscode.s3.eu-north-1.amazonaws.com/assets/img/nft/162548769945.gif'
            variant='rounded'
          />
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
            {' '}
            650 подписчиков
          </Typography>
          <ProfileTabs />
        </HeaderInfo>
      </PageHeader>
    </PageWrapper>
  );
};

export default UserPage;
