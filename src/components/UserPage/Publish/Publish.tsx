import React, { FC, memo } from 'react';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { IPost } from '../../../models/IPost';
import Post from '../../UI/Post/Post';
import { EModal } from '../../../models/EModal';

interface UserPublishProps {
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  isLoading: boolean;
  publishPosts: IPost[];
}

const UserPublish: FC<UserPublishProps> = ({
  handleOpenModal,
  isLoading,
  publishPosts,
}) => {
  return (
    <Stack direction='column' alignItems='center' spacing={5}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading ? (
        <Stack sx={{ height: 'calc(100vh / 3)' }} alignContent='center' justifyContent='center'>
          <CircularProgress />
        </Stack>
      ) : publishPosts.length ? (
        publishPosts.map((post: IPost, index) => (
          <Post
            handleOpenModal={handleOpenModal}
            key={`${index}_${post.id}`}
            post={post}
          />
        ))
      ) : (
        <Stack
          spacing={2}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Typography variant='h6'>
            У пользователя нет опубликованных постов
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default memo(UserPublish);