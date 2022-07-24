import React, { FC, memo, useCallback, useEffect } from 'react';
import { PageWrapper } from './Popular.styled';
import { Stack } from '@mui/material';
import Post from '../../components/UI/Post/Post';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IPost } from '../../models/IPost';
import { useDispatch } from 'react-redux';
import { EModal } from '../../models/EModal';
import { openModal } from '../../store/reducers/modalReducer/actions';
import { ELayouts } from '../../models/ELayouts';
import { getPosts } from '../../helpers/getPosts';

interface LayoutProps {
  handleGetPosts: () => void;
  posts: IPost[];
  bookmarks: IPost[];
  token: string | undefined;
}

const Layout: FC<LayoutProps> = memo(
  ({ posts, handleGetPosts, token, bookmarks }) => {
    const dispatch = useDispatch();

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
          {posts.map((post: IPost, index) => (
            <Post
              inBookmarks={!!bookmarks.find((item) => item.id === post.id)}
              token={token}
              key={`${index}_${post.id}`}
              handleOpenModal={handleOpenModal}
              post={post}
            />
          ))}
        </Stack>
      </PageWrapper>
    );
  }
);

const ContainerLayout: FC<{ type: ELayouts }> = ({ type }) => {
  const dispatch = useDispatch();
  const posts = useTypedSelector((state) => state.posts.posts);
  const bookmarks = useTypedSelector((state) => state.posts.bookmarks);
  const token = useTypedSelector((state) => state.auth.user.token);
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
    />
  );
};

export default ContainerLayout;
