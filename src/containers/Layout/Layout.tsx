import React, { FC, memo, useCallback, useEffect } from 'react';
import { PageWrapper } from './Popular.styled';
import { CircularProgress, Stack, Typography } from '@mui/material';
import Post from '../../components/UI/Post/Post';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IPost } from '../../models/IPost';
import { useDispatch } from 'react-redux';
import { EModal } from '../../models/EModal';
import { openModal } from '../../store/reducers/appReducer/actions';
import { ELayouts } from '../../models/ELayouts';
import { getPosts } from '../../helpers/getPosts';
import { toBookmarks } from '../../store/reducers/postsReducer/actions';
import { EFetchStatus } from '../../models/EFetchStatus';

interface LayoutProps {
  handleGetPosts: () => void;
  handleToBookmarks: (postId: number, inBookmark: boolean) => void;
  posts: IPost[];
  bookmarks: IPost[];
  token: string | undefined;
  postsFetchStatus: EFetchStatus;
}

const Layout: FC<LayoutProps> = memo(
  ({
    posts,
    handleGetPosts,
    token,
    bookmarks,
    handleToBookmarks,
    postsFetchStatus,
  }) => {
    const dispatch = useDispatch();
    const postsIsLoading =
      postsFetchStatus === EFetchStatus.loading ||
      postsFetchStatus === EFetchStatus.idle;

    const handleOpenModal = useCallback(
      (id: string, type: EModal, optional: any) => () =>
        dispatch(openModal(id, type, optional)),
      []
    );

    useEffect(() => {
      handleGetPosts();
    }, [handleGetPosts]);

    return (
      <PageWrapper>
        <Stack direction='column' alignItems='center' spacing={5}>
          {postsIsLoading ? (
            <Stack
              sx={{ height: '90vh' }}
              alignItems='center'
              justifyContent='center'
            >
              <CircularProgress />
            </Stack>
          ) : posts.length ? (
            posts.map((post: IPost, index) => (
              <Post
                handleToBookmarks={handleToBookmarks}
                inBookmarks={!!bookmarks.find((item) => item.id === post.id)}
                token={token}
                key={`${index}_${post.id}`}
                handleOpenModal={handleOpenModal}
                post={post}
              />
            ))
          ) : (
            <Stack
              direction='column'
              alignItems='center'
              justifyContent='center'
              sx={{ height: '90vh' }}
            >
              <Typography variant='h6'>Постов не найдено</Typography>
            </Stack>
          )}
        </Stack>
      </PageWrapper>
    );
  }
);

const ContainerLayout: FC<{ type: ELayouts }> = ({ type }) => {
  const dispatch = useDispatch();
  const posts = useTypedSelector((state) => state.posts.posts);
  const postsFetchStatus = useTypedSelector(
    (state) => state.posts.postsFetchStatus
  );
  const bookmarks = useTypedSelector((state) => state.posts.bookmarks);
  const token = useTypedSelector((state) => state.auth.user.token);

  const handleToBookmarks = useCallback(
    (postId: number, inBookmark: boolean) => {
      dispatch(toBookmarks(token, postId, inBookmark));
    },
    []
  );

  const handleGetPosts = useCallback(
    () => dispatch(getPosts(type, token)),
    [type]
  );
  return (
    <Layout
      posts={posts}
      token={token}
      bookmarks={bookmarks}
      handleGetPosts={handleGetPosts}
      handleToBookmarks={handleToBookmarks}
      postsFetchStatus={postsFetchStatus}
    />
  );
};

export default ContainerLayout;
