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
import { toBookmarks } from '../../store/reducers/postsReducer/actions';

interface UserProps {
  handleGetUser: (userId: number) => void;
  handleToSubscribe: () => void;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  user: IUser;
  publishPosts: IPost[];
  profileFetchStatus: EFetchStatus;
  subscribers: ISubscriber[];
  subscriptions: ISubscription[];
  handleToBookmarks: (postId: number) => void;
  isSubscriber: boolean;
  bookmarks: IPost[];
  token: string;
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
    handleToBookmarks,
    bookmarks,
    token,
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
                  bookmarks={bookmarks}
                  token={token}
                  handleToBookmarks={handleToBookmarks}
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
  const bookmarks = useTypedSelector((state) => state.posts.bookmarks);

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

  const handleToBookmarks = useCallback(
    (postId: number) => {
      dispatch(toBookmarks(guest.token, postId));
    },
    [guest]
  );

  return (
    <User
      handleOpenModal={handleOpenModal}
      handleToBookmarks={handleToBookmarks}
      publishPosts={posts}
      handleGetUser={handleGetUser}
      user={user}
      subscribers={subscribers}
      subscriptions={subscriptions}
      profileFetchStatus={profileFetchStatus}
      isSubscriber={!!isSubscriber}
      handleToSubscribe={handleToSubscribe}
      token={guest.token}
      bookmarks={bookmarks}
    />
  );
};

export default ContainerUser;
