import React from 'react';
import {
  Banner,
  Info,
  PageWrapper,
  ProfileAvatar,
  ProfileHeader,
} from './Profile.styled';
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { IoChatboxEllipses, IoPersonAdd } from 'react-icons/io5';
import ProfileTabs from '../../components/Profile/Tabs/Tabs';

const Profile = () => {
  return (
    <PageWrapper>
      <Stack direction='row' alignItems='center' justifyContent='center'>
        <ProfileHeader>
          <Banner />
          <Info>
            <ProfileAvatar
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
            <Typography textAlign='left'> 650 подписчиков</Typography>
            <ProfileTabs />
          </Info>
        </ProfileHeader>
      </Stack>
    </PageWrapper>
  );
};

const ContainerProfile = () => {
  return <Profile />;
};
export default ContainerProfile;
