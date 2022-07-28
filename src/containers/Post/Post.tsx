import React, { FC, memo, useCallback, useLayoutEffect } from 'react';
import { Container, Paper, Stack, Typography } from '@mui/material';
import { getPost } from '../../store/reducers/postsReducer/actions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IPost } from '../../models/IPost';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Blocks from 'editorjs-blocks-react-renderer';
import { renderConfig } from '../../components/UI/Post/widget/Content/renderConfig';
import { EFetchStatus } from '../../models/EFetchStatus';

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
          <Stack alignItems='center' flexDirection='column'>
            {!postsIsLoading && (
              <>
                <Typography sx={{ mb: '7px', mt: '12px' }} variant='h6'>
                  {post?.title}
                </Typography>
                <Blocks
                  data={{
                    time: 1610632160642,
                    version: '2.24.3',
                    blocks: post.data.entry,
                  }}
                  config={renderConfig}
                />
              </>
            )}
          </Stack>
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
