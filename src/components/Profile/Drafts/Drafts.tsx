import React, { FC, memo, useEffect } from 'react';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { IPost } from '../../../models/IPost';
import Post from '../../UI/Post/Post';
import { EModal } from '../../../models/EModal';

interface ProfileDraftsProps {
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  isLoading: boolean;
  getDraftPosts: () => void;
  handleDeletePost: (postId: number) => () => void;
  draftPosts: IPost[];
}

const ProfileDrafts: FC<ProfileDraftsProps> = ({
  handleOpenModal,
  isLoading,
  getDraftPosts,
  draftPosts,
  handleDeletePost,
}) => {
  useEffect(() => {
    getDraftPosts();
  }, []);
  return (
    <Stack direction='column' alignItems='center' spacing={5}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading ? (
        <CircularProgress />
      ) : draftPosts.length ? (
        draftPosts.map((post: IPost, index) => (
          <Post
            key={`${index}_${post.id}`}
            handleOpenModal={handleOpenModal}
            handleDeletePost={handleDeletePost}
            post={post}
            profile
            isDraft
          />
        ))
      ) : (
        <Stack
          spacing={2}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Typography variant='h6'>У вас нету черновиков</Typography>
          <Button
            onClick={handleOpenModal(
              EModal.createPostModal,
              EModal.createPostModal,
              null
            )}
            variant='contained'
          >
            Создать пост
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default memo(ProfileDrafts);
