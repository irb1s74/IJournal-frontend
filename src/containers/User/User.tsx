import React, { FC, memo, useCallback, useEffect } from 'react';
import { PageWrapper, UserContent } from './User.styled';
import {
  getProfileUser,
  getUserSubscriptions,
} from '../../store/reducers/profileReducer/action';
import { useDispatch } from 'react-redux';
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { openModal } from '../../store/reducers/modalReducer/actions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Skeleton } from '@mui/material';
import Header from '../../components/User/Header/Header';
import Publish from '../../components/User/Publish/Publish';
import Details from '../../components/User/Details/Details';
import { IPost } from '../../models/IPost';
import { IUser } from '../../models/IUser';
import { ISubscriber } from '../../models/ISubscriber';
import { ISubscription } from '../../models/ISubscription';
import { EModal } from '../../models/EModal';
import { EFetchStatus } from '../../models/EFetchStatus';

interface UserProps {
  handleGetUser: (userId: number) => void;
  handleGetUserSubscriptions: (userId: number) => void;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  user: IUser;
  publishPosts: IPost[];
  profileFetchStatus: EFetchStatus;
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
}

const User: FC<UserProps> = memo(
  ({
    handleGetUser,
    user,
    profileFetchStatus,
    publishPosts,
    handleOpenModal,
    handleGetUserSubscriptions,
    subscribers,
    subscriptions,
  }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const profileIsLoading =
      profileFetchStatus === EFetchStatus.loading ||
      profileFetchStatus === EFetchStatus.idle;
    useEffect(() => {
      if (id && +id) {
        handleGetUser(+id);
      } else {
        navigate('/');
      }
    }, [id]);
    return (
      <PageWrapper>
        {profileIsLoading ? (
          <Skeleton
            variant='rectangular'
            animation='wave'
            height={486}
            sx={{ borderRadius: '20px' }}
          />
        ) : (
          <Header user={user} />
        )}
        <UserContent>
          <Routes>
            <Route
              index
              element={
                <Publish
                  handleOpenModal={handleOpenModal}
                  isLoading={profileIsLoading}
                  publishPosts={publishPosts}
                />
              }
            />
            <Route
              path='/details'
              element={
                <Details
                  subscribers={subscribers}
                  subscriptions={subscriptions}
                  handleGetUserSubscriptions={handleGetUserSubscriptions}
                />
              }
            />
            <Route path='*' element={<Navigate to='' />} />
          </Routes>
        </UserContent>
      </PageWrapper>
    );
  }
);

const ContainerUser = () => {
  const dispatch = useDispatch();
  const user = useTypedSelector((state) => state.profile.user);
  const posts = useTypedSelector((state) => state.profile.publishPosts);
  const subscribers = useTypedSelector((state) => state.profile.subscribers);
  const subscriptions = useTypedSelector(
    (state) => state.profile.subscriptions
  );
  const profileFetchStatus = useTypedSelector(
    (state) => state.profile.profileFetchStatus
  );

  const handleGetUser = useCallback(
    (userId: number) => dispatch(getProfileUser(userId)),
    []
  );

  const handleGetUserSubscriptions = useCallback(
    (userId: number) => dispatch(getUserSubscriptions(userId)),
    []
  );
  const handleOpenModal = useCallback(
    (id: string, type: EModal, optional: any) => () =>
      dispatch(openModal(id, type, optional)),
    []
  );

  return (
    <User
      handleOpenModal={handleOpenModal}
      publishPosts={posts}
      handleGetUser={handleGetUser}
      handleGetUserSubscriptions={handleGetUserSubscriptions}
      user={user}
      subscribers={subscribers}
      subscriptions={subscriptions}
      profileFetchStatus={profileFetchStatus}
    />
  );
};

export default ContainerUser;
