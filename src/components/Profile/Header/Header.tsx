import React, { FC, memo, useRef } from 'react';
import { Button, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { IoChatboxEllipses, IoPersonAdd, IoPencilSharp } from 'react-icons/io5';
import ProfileTabs from '../Tabs/Tabs';
import {
  Banner,
  FabBanner,
  Header,
  Info,
  WrapperAvatar,
} from './Header.styled';
import Avatar from '../../UI/Avatar/Avatar';
import { IUser } from '../../../models/IUser';

interface ProfileHeaderProps {
  user: IUser;
  handleUpdateBanner: (file: any) => void;
  handleUpdateAvatar: (file: any) => void;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  user,
  handleUpdateBanner,
  handleUpdateAvatar,
}) => {
  const avatarFile = useRef(document.createElement('input'));
  const bannerFile = useRef(document.createElement('input'));

  const clickToAvatar = () => {
    avatarFile.current.click();
  };
  const clickToBanner = () => {
    bannerFile.current.click();
  };
  const avatarUpdate = () => {
    if (avatarFile.current.files) {
      handleUpdateAvatar(avatarFile.current.files);
    }
  };
  const bannerUpdate = () => {
    if (bannerFile.current.files) {
      handleUpdateBanner(bannerFile.current.files);
    }
  };

  return (
    <Header>
      <Banner bg={user.banner}>
        <FabBanner onClick={clickToBanner} size='small'>
          <IoPencilSharp size='15' />
        </FabBanner>
        <input
          ref={bannerFile}
          type='file'
          accept='.jpeg, .jpg, .png, .gif'
          onChange={bannerUpdate}
          hidden
        />
      </Banner>
      <Info>
        <WrapperAvatar>
          <Tooltip title='Изменить аватар'>
            <IconButton
              onClick={clickToAvatar}
              sx={{ position: 'relative' }}
              size='large'
            >
              <Avatar user={user} profile />
            </IconButton>
          </Tooltip>
          <input
            ref={avatarFile}
            type='file'
            accept='.jpeg, .jpg, .png, .gif'
            onChange={avatarUpdate}
            hidden
          />
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
