import React, { FC, memo, useCallback, useEffect } from 'react';
import { PageWrapper } from './Popular.styled';
import { Stack, Typography } from '@mui/material';
import Post from '../../components/UI/Post/Post';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IPost } from '../../models/IPost';
import { getPosts } from '../../store/reducers/postsReducer/actions';
import { useDispatch } from 'react-redux';
import { EModal } from '../../models/EModal';
import { openModal } from '../../store/reducers/modalReducer/actions';

interface PopularProps {
  handleGetPosts: () => void;
  posts: IPost[];
  token: string | undefined;
}

const Popular: FC<PopularProps> = memo(({ posts, handleGetPosts, token }) => {
  const dispatch = useDispatch();

  const handleOpenModal = useCallback(
    (id: string, type: EModal, optional: any) =>
      dispatch(openModal(id, type, optional)),
    []
  );

  useEffect(() => {
    handleGetPosts();
  }, []);

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

const ContainerPopular = () => {
  const dispatch = useDispatch();
  const posts = useTypedSelector((state) => state.posts.News);
  const token = useTypedSelector((state) => state.auth.user.token);
  const handleGetPosts = useCallback(() => dispatch(getPosts()), []);
  return (
    <Popular posts={posts} token={token} handleGetPosts={handleGetPosts} />
  );
};

export default ContainerPopular;
