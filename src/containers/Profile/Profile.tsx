import React, { FC, memo, useCallback, useEffect } from 'react';
import { PageWrapper, ProfileContent } from './Profile.styled';
import ProfileHeader from '../../components/Profile/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
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
  getUserSubscriptions,
  toUnPublish,
  updateAvatar,
  updateBanner,
} from '../../store/reducers/profileReducer/action';
import { IPost } from '../../models/IPost';
import { IUser } from '../../models/IUser';
import ProfileSettings from '../../components/Profile/Settings/Settings';
import ProfileDetails from '../../components/Profile/Details/Details';
import { ISubscriber } from '../../models/ISubscriber';
import { ISubscription } from '../../models/ISubscription';

interface ProfileProps {
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  profileFetchStatus: EFetchStatus;
  handleGetDraftPosts: () => void;
  handleGetPublishPosts: () => void;
  handleToUnPublish: (postId: number) => () => void;
  handleDeletePost: (postId: number) => () => void;
  handleUpdateBanner: (file: any) => void;
  handleUpdateAvatar: (file: any) => void;
  handleGetUserSubscriptions: () => void;
  draftPosts: IPost[];
  publishPosts: IPost[];
  user: IUser;
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
}

const Profile: FC<ProfileProps> = memo(
  ({
    handleOpenModal,
    handleGetDraftPosts,
    handleGetPublishPosts,
    handleToUnPublish,
    handleDeletePost,
    handleUpdateBanner,
    handleUpdateAvatar,
    profileFetchStatus,
    draftPosts,
    publishPosts,
    subscribers,
    subscriptions,
    handleGetUserSubscriptions,
    user,
  }) => {
    const profileIsLoading =
      profileFetchStatus === EFetchStatus.loading ||
      profileFetchStatus === EFetchStatus.idle;

    useEffect(() => {
      handleGetUserSubscriptions();
    }, []);

    return (
      <PageWrapper>
        <ProfileHeader
          user={user}
          handleUpdateBanner={handleUpdateBanner}
          handleUpdateAvatar={handleUpdateAvatar}
          subscribers={subscribers.length}
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
            <Route
              path='/details'
              element={
                <ProfileDetails
                  subscriptions={subscriptions}
                  subscribers={subscribers}
                />
              }
            />
            <Route path='/settings' element={<ProfileSettings />} />
            <Route path='*' element={<Navigate to='' />} />
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
  const subscribers = useTypedSelector((state) => state.profile.subscribers);
  const subscriptions = useTypedSelector(
    (state) => state.profile.subscriptions
  );

  const handleGetDraftPosts = useCallback(
    () => dispatch(getDraftPosts(token)),
    []
  );
  const handleGetUserSubscriptions = useCallback(
    () => dispatch(getUserSubscriptions(user.id)),
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
      handleGetUserSubscriptions={handleGetUserSubscriptions}
      handleGetDraftPosts={handleGetDraftPosts}
      handleGetPublishPosts={handleGetPublishPosts}
      handleOpenModal={handleOpenModal}
      handleToUnPublish={handleToUnPublish}
      handleDeletePost={handleDeletePost}
      handleUpdateBanner={handleUpdateBanner}
      handleUpdateAvatar={handleUpdateAvatar}
      draftPosts={draftPosts}
      publishPosts={publishPosts}
      subscribers={subscribers}
      subscriptions={subscriptions}
      user={user}
    />
  );
};
export default ContainerProfile;
