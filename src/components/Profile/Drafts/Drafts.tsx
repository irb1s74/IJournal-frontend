import React, { FC, memo, useEffect } from 'react';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { IPost } from '../../../models/IPost';
import Post from '../../UI/Post/Post';
import { EModal } from '../../../models/EModal';

interface ProfileDraftsProps {
  handleOpenModal: (id: string, type: EModal, optional: any) => void;
  isLoading: boolean;
  getDraftPosts: () => void;
  handleDeletePost: (postId: number) => () => void;
  handleToBookmarks: (postId: number, inBookmark: boolean) => void;
  draftPosts: IPost[];
  bookmarks: IPost[];
  token: string;
}

const ProfileDrafts: FC<ProfileDraftsProps> = ({
  handleOpenModal,
  isLoading,
  getDraftPosts,
  draftPosts,
  handleDeletePost,
  handleToBookmarks,
  bookmarks,
  token,
}) => {
  useEffect(() => {
    getDraftPosts();
  }, []);

  const showModal = () => {
    handleOpenModal(EModal.createPostModal, EModal.createPostModal, null);
  };

  return (
    <Stack direction='column' alignItems='center' spacing={5}>
      {isLoading ? (
        <CircularProgress />
      ) : draftPosts.length ? (
        draftPosts.map((post: IPost, index) => (
          <Post
            token={token}
            key={`${index}_${post.id}`}
            handleOpenModal={handleOpenModal}
            handleDeletePost={handleDeletePost}
            handleToBookmarks={handleToBookmarks}
            post={post}
            inBookmarks={!!bookmarks.find((item) => item.id === post.id)}
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
          <Button onClick={showModal} variant='contained'>
            Создать пост
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default memo(ProfileDrafts);
