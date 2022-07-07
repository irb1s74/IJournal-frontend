import React, { FC, memo, useCallback } from 'react';
import { PageWrapper, ProfileContent } from './Profile.styled';
import ProfileHeader from '../../components/Profile/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProfileDrafts from '../../components/Profile/Drafts/Drafts';
import ProfilePublish from '../../components/Profile/Publish/Publish';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { EModal } from '../../models/EModal';
import { openModal } from '../../store/reducers/modalReducer/actions';
import { EFetchStatus } from '../../models/EFetchStatus';

import {
  deletePost,
  getDraftPosts,
  getPublishPosts,
  toUnPublish,
  updateAvatar,
  updateBanner,
} from '../../store/reducers/profileReducer/action';
import { IPost } from '../../models/IPost';
import { IUser } from '../../models/IUser';
import ProfileDonates from '../../components/Profile/Donates/Donates';
import ProfileSettings from '../../components/Profile/Settings/Settings';

interface ProfileProps {
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  profileFetchStatus: EFetchStatus;
  handleGetDraftPosts: () => void;
  handleGetPublishPosts: () => void;
  handleToUnPublish: (postId: number) => () => void;
  handleDeletePost: (postId: number) => () => void;
  handleUpdateBanner: (file: any) => void;
  handleUpdateAvatar: (file: any) => void;
  draftPosts: IPost[];
  publishPosts: IPost[];
  user: IUser;
}

const Profile: FC<ProfileProps> = memo(
  ({
    handleOpenModal,
    profileFetchStatus,
    handleGetDraftPosts,
    handleGetPublishPosts,
    draftPosts,
    publishPosts,
    handleToUnPublish,
    handleDeletePost,
    handleUpdateBanner,
    handleUpdateAvatar,
    user,
  }) => {
    const profileIsLoading =
      profileFetchStatus === EFetchStatus.loading ||
      profileFetchStatus === EFetchStatus.idle;

    return (
      <PageWrapper>
        <ProfileHeader
          user={user}
          handleUpdateBanner={handleUpdateBanner}
          handleUpdateAvatar={handleUpdateAvatar}
        />
        <ProfileContent>
          <Routes>
            <Route
              index
              element={
                <ProfilePublish
                  publishPosts={publishPosts}
                  isLoading={profileIsLoading}
                  getPublishPosts={handleGetPublishPosts}
                  handleOpenModal={handleOpenModal}
                  handleToUnPublish={handleToUnPublish}
                  handleDeletePost={handleDeletePost}
                />
              }
            />
            <Route
              path='/drafts'
              element={
                <ProfileDrafts
                  draftPosts={draftPosts}
                  isLoading={profileIsLoading}
                  getDraftPosts={handleGetDraftPosts}
                  handleOpenModal={handleOpenModal}
                  handleDeletePost={handleDeletePost}
                />
              }
            />
            <Route path='/donates' element={<ProfileDonates />} />
            <Route path='/settings' element={<ProfileSettings />} />
          </Routes>
        </ProfileContent>
      </PageWrapper>
    );
  }
);

const ContainerProfile = () => {
  const dispatch = useDispatch();

  const token = useTypedSelector((state) => state.auth.user.token);
  const user = useTypedSelector((state) => state.auth.user);

  const profileFetchStatus = useTypedSelector(
    (state) => state.profile.profileFetchStatus
  );
  const draftPosts = useTypedSelector((state) => state.profile.draftPosts);
  const publishPosts = useTypedSelector((state) => state.profile.publishPosts);

  const handleGetDraftPosts = useCallback(
    () => dispatch(getDraftPosts(token)),
    []
  );
  const handleGetPublishPosts = useCallback(
    () => dispatch(getPublishPosts(token)),
    []
  );
  const handleOpenModal = useCallback(
    (id: string, type: EModal, optional: any) => () =>
      dispatch(openModal(id, type, optional)),
    []
  );
  const handleToUnPublish = useCallback(
    (postId: number) => () => dispatch(toUnPublish(token, postId)),
    []
  );
  const handleDeletePost = useCallback(
    (postId: number) => () => dispatch(deletePost(token, postId)),
    []
  );
  const handleUpdateBanner = useCallback(
    (file: any) => dispatch(updateBanner(token, file)),
    []
  );
  const handleUpdateAvatar = useCallback(
    (file: any) => dispatch(updateAvatar(token, file)),
    []
  );
  return (
    <Profile
      profileFetchStatus={profileFetchStatus}
      handleGetDraftPosts={handleGetDraftPosts}
      handleGetPublishPosts={handleGetPublishPosts}
      handleOpenModal={handleOpenModal}
      handleToUnPublish={handleToUnPublish}
      handleDeletePost={handleDeletePost}
      handleUpdateBanner={handleUpdateBanner}
      handleUpdateAvatar={handleUpdateAvatar}
      draftPosts={draftPosts}
      publishPosts={publishPosts}
      user={user}
    />
  );
};
export default ContainerProfile;
