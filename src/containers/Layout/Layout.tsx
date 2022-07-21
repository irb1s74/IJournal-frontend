import React, { FC, memo, useCallback, useEffect } from 'react';
import { PageWrapper } from './Popular.styled';
import { Stack, Typography } from '@mui/material';
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
  token: string | undefined;
}

const Layout: FC<LayoutProps> = memo(({ posts, handleGetPosts, token }) => {
  const dispatch = useDispatch();

  const handleOpenModal = useCallback(
    (id: string, type: EModal, optional: any) =>
      dispatch(openModal(id, type, optional)),
    []
  );

  useEffect(() => {
    handleGetPosts();
  }, [handleGetPosts]);

  return (
    <PageWrapper>
      <Typography textAlign='center' variant='h6'>
        Top news
      </Typography>
      <Stack direction='column' alignItems='center' spacing={5}>
        {posts.map((post: IPost, index) => (
          <Post
            token={token}
            key={`${index}_${post.id}`}
            handleOpenModal={handleOpenModal}
            post={post}
          />
        ))}
      </Stack>
    </PageWrapper>
  );
});

const ContainerLayout: FC<{ type: ELayouts }> = ({ type }) => {
  const dispatch = useDispatch();
  const posts = useTypedSelector((state) => state.posts.posts);
  const token = useTypedSelector((state) => state.auth.user.token);
  const handleGetPosts = useCallback(
    () => dispatch(getPosts(type, token)),
    [type]
  );
  return <Layout posts={posts} token={token} handleGetPosts={handleGetPosts} />;
};

export default ContainerLayout;
