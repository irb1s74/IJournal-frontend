import React, { FC, useCallback } from 'react';
import {
  Banner,
  Info,
  PageWrapper,
  ProfileAvatar,
  ProfileContent,
  ProfileHeader,
} from './Profile.styled';
import { Button, Stack, Typography } from '@mui/material';
import { IoChatboxEllipses, IoPersonAdd } from 'react-icons/io5';
import ProfileTabs from '../../components/Profile/Tabs/Tabs';
import { Route, Routes } from 'react-router-dom';
import ProfileDrafts from '../../components/Profile/Drafts/Drafts';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { EModal } from '../../models/EModal';
import { openModal } from '../../store/reducers/modalReducer/actions';
import { EFetchStatus } from '../../models/EFetchStatus';
import { getDraftPosts } from '../../store/reducers/profileReducer/action';
import { IPost } from '../../models/IPost';

interface ProfileProps {
  token: string;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  profileFetchStatus: EFetchStatus;
  handleGetDraftPosts: () => void;
  draftPosts: IPost[];
}

const Profile: FC<ProfileProps> = ({
  token,
  handleOpenModal,
  profileFetchStatus,
  handleGetDraftPosts,
  draftPosts,
}) => {
  const profileIsLoading =
    profileFetchStatus === EFetchStatus.loading ||
    profileFetchStatus === EFetchStatus.idle;

  return (
    <PageWrapper>
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
          <Typography variant='subtitle1' textAlign='left'>
            650 подписчиков
          </Typography>
          <ProfileTabs />
        </Info>
      </ProfileHeader>
      <ProfileContent>
        <Routes>
          <Route
            index
            element={<Typography variant='h1'> entries</Typography>}
          />
          <Route
            path='/comments'
            element={<Typography variant='h1'> drafts</Typography>}
          />
          <Route
            path='/drafts'
            element={
              <ProfileDrafts
                draftPosts={draftPosts}
                isLoading={profileIsLoading}
                getDraftPosts={handleGetDraftPosts}
                token={token}
                handleOpenModal={handleOpenModal}
              />
            }
          />
          <Route
            path='/donates'
            element={<Typography variant='h1'> drafts</Typography>}
          />
          <Route
            path='/details'
            element={<Typography variant='h1'> drafts</Typography>}
          />
        </Routes>
      </ProfileContent>
    </PageWrapper>
  );
};

const ContainerProfile = () => {
  const dispatch = useDispatch();
  const token = useTypedSelector((state) => state.auth.user.token);
  const profileFetchStatus = useTypedSelector(
    (state) => state.profile.profileFetchStatus
  );
  const draftPosts = useTypedSelector((state) => state.profile.draftPosts);
  const handleGetDraftPosts = useCallback(
    () => dispatch(getDraftPosts(token)),
    []
  );
  const handleOpenModal = useCallback(
    (id: string, type: EModal, optional: any) => () =>
      dispatch(openModal(id, type, optional)),
    []
  );
  return (
    <Profile
      profileFetchStatus={profileFetchStatus}
      token={token}
      handleGetDraftPosts={handleGetDraftPosts}
      handleOpenModal={handleOpenModal}
      draftPosts={draftPosts}
    />
  );
};
export default ContainerProfile;
