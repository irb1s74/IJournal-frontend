import React, { FC, memo, useCallback, useLayoutEffect } from 'react';
import {
  CircularProgress,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { getPost } from '../../store/reducers/postsReducer/actions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IPost } from '../../models/IPost';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Blocks from 'editorjs-blocks-react-renderer';
import { renderConfig } from '../../components/UI/Post/widget/Content/renderConfig';
import { EFetchStatus } from '../../models/EFetchStatus';
import Avatar from '../../components/UI/Avatar/Avatar';
import dayjs from 'dayjs';

interface PostProps {
  handleGetPost: (id: number) => void;
  post: IPost;
  postsFetchStatus: EFetchStatus;
}

const Post: FC<PostProps> = memo(
  ({ post, handleGetPost, postsFetchStatus }) => {
    const { id } = useParams();
    useLayoutEffect(() => {
      if (id) {
        handleGetPost(+id);
      }
    }, [id]);

    const postsIsLoading =
      postsFetchStatus === EFetchStatus.loading ||
      postsFetchStatus === EFetchStatus.idle;
    return (
      <Paper
        sx={{
          padding: '16px 0',
          width: '60%',
          margin: '15px auto 0 auto',
        }}
      >
        <Container maxWidth='xl'>
          {!postsIsLoading ? (
            <>
              <Stack
                alignItems='center'
                flexDirection='row'
                justifyContent='space-between'
              >
                <Link to={`/user/${post.author.id}`}>
                  <Stack alignItems='center' flexDirection='row'>
                    <Avatar user={post.author} size='40' />
                    <Typography sx={{ ml: '15px' }} variant='h5'>
                      {post.author.nickname}
                    </Typography>
                  </Stack>
                </Link>
                <Typography sx={{ ml: '10px' }}>
                  {dayjs(post.updatedAt)
                    .locale('ru')
                    .format('D MMMM [at] HH:mm')}
                </Typography>
              </Stack>
              <Typography sx={{ mb: '7px', mt: '12px' }} variant='h6'>
                {post?.title}
              </Typography>
              <Stack alignItems='center' flexDirection='column'>
                <Blocks
                  data={{
                    time: 1610632160642,
                    version: '2.24.3',
                    blocks: post.data.entry,
                  }}
                  config={renderConfig}
                />
              </Stack>
            </>
          ) : (
            <Stack
              sx={{ height: 'calc(70vh)' }}
              alignItems='center'
              justifyContent='center'
            >
              <CircularProgress />
            </Stack>
          )}
        </Container>
      </Paper>
    );
  }
);

const ContainerPost = () => {
  const dispatch = useDispatch();
  const post = useTypedSelector((state) => state.posts.post);
  const postsFetchStatus = useTypedSelector(
    (state) => state.posts.postsFetchStatus
  );
  const handleGetPost = useCallback((id) => dispatch(getPost(id)), []);

  return (
    <Post
      postsFetchStatus={postsFetchStatus}
      post={post}
      handleGetPost={handleGetPost}
    />
  );
};
export default ContainerPost;
