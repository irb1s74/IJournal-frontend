import React, { FC, memo, useCallback, useEffect } from 'react';
import { PageWrapper, ProfileContent } from './Profile.styled';
import ProfileHeader from '../../components/Profile/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProfileDrafts from '../../components/Profile/Drafts/Drafts';
import ProfilePublish from '../../components/Profile/Publish/Publish';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { EModal } from '../../models/EModal';
import { openModal } from '../../store/reducers/appReducer/actions';
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
import { toBookmarks } from '../../store/reducers/postsReducer/actions';

interface ProfileProps {
  handleOpenModal: (id: string, type: EModal, optional: any) => void;
  profileFetchStatus: EFetchStatus;
  handleGetDraftPosts: () => void;
  handleGetPublishPosts: () => void;
  handleToUnPublish: (postId: number) => () => void;
  handleDeletePost: (postId: number) => () => void;
  handleUpdateBanner: (file: any) => void;
  handleUpdateAvatar: (file: any) => void;
  handleToBookmarks: (postId: number, inBookmark: boolean) => void;
  handleGetUserSubscriptions: () => void;
  draftPosts: IPost[];
  bookmarks: IPost[];
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
    handleToBookmarks,
    profileFetchStatus,
    draftPosts,
    publishPosts,
    subscribers,
    subscriptions,
    handleGetUserSubscriptions,
    bookmarks,
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
                  token={user.token}
                  bookmarks={bookmarks}
                  publishPosts={publishPosts}
                  isLoading={profileIsLoading}
                  getPublishPosts={handleGetPublishPosts}
                  handleOpenModal={handleOpenModal}
                  handleToUnPublish={handleToUnPublish}
                  handleDeletePost={handleDeletePost}
                  handleToBookmarks={handleToBookmarks}
                />
              }
            />
            <Route
              path='/drafts'
              element={
                <ProfileDrafts
                  token={user.token}
                  bookmarks={bookmarks}
                  draftPosts={draftPosts}
                  isLoading={profileIsLoading}
                  getDraftPosts={handleGetDraftPosts}
                  handleOpenModal={handleOpenModal}
                  handleDeletePost={handleDeletePost}
                  handleToBookmarks={handleToBookmarks}
                />
              }
            />
            <Route
              path='/details'
              element={
                <ProfileDetails
                  handleOpenModal={handleOpenModal}
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
  const bookmarks = useTypedSelector((state) => state.posts.bookmarks);
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
    (id: string, type: EModal, optional: any) =>
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
  const handleToBookmarks = useCallback(
    (postId: number, inBookmark: boolean) => {
      dispatch(toBookmarks(token, postId, inBookmark));
    },
    []
  );

  return (
    <Profile
      bookmarks={bookmarks}
      profileFetchStatus={profileFetchStatus}
      handleGetUserSubscriptions={handleGetUserSubscriptions}
      handleGetDraftPosts={handleGetDraftPosts}
      handleGetPublishPosts={handleGetPublishPosts}
      handleOpenModal={handleOpenModal}
      handleToUnPublish={handleToUnPublish}
      handleDeletePost={handleDeletePost}
      handleUpdateBanner={handleUpdateBanner}
      handleUpdateAvatar={handleUpdateAvatar}
      handleToBookmarks={handleToBookmarks}
      draftPosts={draftPosts}
      publishPosts={publishPosts}
      subscribers={subscribers}
      subscriptions={subscriptions}
      user={user}
    />
  );
};
export default ContainerProfile;
