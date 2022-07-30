import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
} from 'react';
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
import { Link, useNavigate, useParams } from 'react-router-dom';
import Blocks from 'editorjs-blocks-react-renderer';
import { renderConfig } from '../../components/UI/Post/widget/Content/renderConfig';
import { EFetchStatus } from '../../models/EFetchStatus';
import Avatar from '../../components/UI/Avatar/Avatar';
import dayjs from 'dayjs';

interface PostProps {
  handleGetPost: (id: number) => void;
  post: IPost;
  postFetchStatus: EFetchStatus;
}

const Post: FC<PostProps> = memo(({ post, handleGetPost, postFetchStatus }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postIsLoading =
    postFetchStatus === EFetchStatus.loading ||
    postFetchStatus === EFetchStatus.idle;

  useLayoutEffect(() => {
    if (id && +id) {
      handleGetPost(+id);
    } else {
      navigate('/');
    }
  }, [id]);

  useEffect(() => {
    if (!post.id && !postIsLoading) {
      navigate('/');
    }
  }, [post, postIsLoading]);

  return (
    <Paper
      sx={{
        padding: '16px 0',
        width: '60%',
        margin: '15px auto 0 auto',
      }}
    >
      <Container maxWidth='xl'>
        {postIsLoading ? (
          <Stack
            sx={{ height: 'calc(70vh)' }}
            alignItems='center'
            justifyContent='center'
          >
            <CircularProgress />
          </Stack>
        ) : (
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
                {dayjs(post.updatedAt).locale('ru').format('D MMMM [at] HH:mm')}
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
        )}
      </Container>
    </Paper>
  );
});

const ContainerPost = () => {
  const dispatch = useDispatch();
  const post = useTypedSelector((state) => state.posts.post);
  const postFetchStatus = useTypedSelector(
    (state) => state.posts.postFetchStatus
  );
  const handleGetPost = useCallback((id) => dispatch(getPost(id)), []);

  return (
    <Post
      postFetchStatus={postFetchStatus}
      post={post}
      handleGetPost={handleGetPost}
    />
  );
};
export default ContainerPost;
