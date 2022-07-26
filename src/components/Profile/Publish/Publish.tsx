import React, { FC, memo, useEffect } from 'react';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { IPost } from '../../../models/IPost';
import Post from '../../UI/Post/Post';
import { EModal } from '../../../models/EModal';

interface ProfilePublishProps {
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  handleToUnPublish: (postId: number) => () => void;
  handleDeletePost: (postId: number) => () => void;
  handleToBookmarks: (postId: number, inBookmark: boolean) => void;
  isLoading: boolean;
  getPublishPosts: () => void;
  publishPosts: IPost[];
  bookmarks: IPost[];
  token: string;
}

const ProfilePublish: FC<ProfilePublishProps> = ({
  handleOpenModal,
  getPublishPosts,
  isLoading,
  publishPosts,
  handleToUnPublish,
  handleDeletePost,
  handleToBookmarks,
  bookmarks,
  token,
}) => {
  useEffect(() => {
    getPublishPosts();
  }, []);
  return (
    <Stack direction='column' alignItems='center' spacing={5}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading ? (
        <CircularProgress />
      ) : publishPosts.length ? (
        publishPosts.map((post: IPost, index) => (
          <Post
            token={token}
            key={`${index}_${post.id}`}
            handleOpenModal={handleOpenModal}
            handleToUnPublish={handleToUnPublish}
            handleDeletePost={handleDeletePost}
            handleToBookmarks={handleToBookmarks}
            post={post}
            inBookmarks={!!bookmarks.find((item) => item.id === post.id)}
            profile
          />
        ))
      ) : (
        <Stack
          spacing={2}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Typography variant='h6'>У вас нету опубликованных постов</Typography>
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

export default memo(ProfilePublish);
