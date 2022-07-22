import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
} from 'react';
import { PageWrapper, UserContent } from './User.styled';
import {
  getProfileUser,
  toSubscribe,
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
  handleToSubscribe: () => void;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  user: IUser;
  publishPosts: IPost[];
  profileFetchStatus: EFetchStatus;
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
  isSubscriber: boolean;
}

const User: FC<UserProps> = memo(
  ({
    handleGetUser,
    user,
    profileFetchStatus,
    publishPosts,
    handleOpenModal,
    subscribers,
    subscriptions,
    handleToSubscribe,
    isSubscriber,
  }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const profileIsLoading =
      profileFetchStatus === EFetchStatus.loading ||
      profileFetchStatus === EFetchStatus.idle;
    useLayoutEffect(() => {
      if (id && +id) {
        handleGetUser(+id);
      } else {
        navigate('/');
      }
    }, [id]);
    useEffect(() => {
      if (!user) {
        navigate('/');
      }
    }, [user]);
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
          <Header
            isSubscriber={isSubscriber}
            user={user}
            subscribers={subscribers.length}
            handleToSubscribe={handleToSubscribe}
          />
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
                  handleOpenModal={handleOpenModal}
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
  const guest = useTypedSelector((state) => state.auth.user);
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

  const handleToSubscribe = useCallback(
    () => dispatch(toSubscribe(guest.token, user.id)),
    [guest, user]
  );

  const handleOpenModal = useCallback(
    (id: string, type: EModal, optional: any) => () =>
      dispatch(openModal(id, type, optional)),
    []
  );

  const isSubscriber = useMemo(() => {
    return subscribers.find((item) => item.subscriber.id === guest.id);
  }, [subscribers, guest]);
  return (
    <User
      handleOpenModal={handleOpenModal}
      publishPosts={posts}
      handleGetUser={handleGetUser}
      user={user}
      subscribers={subscribers}
      subscriptions={subscriptions}
      profileFetchStatus={profileFetchStatus}
      isSubscriber={!!isSubscriber}
      handleToSubscribe={handleToSubscribe}
    />
  );
};

export default ContainerUser;
