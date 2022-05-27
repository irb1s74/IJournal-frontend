import React, { FC, memo, useEffect, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { IPost } from '../../../models/IPost';
import Post from '../../UI/Post/Post';
import ProfileService from '../../../api/ProfileService';
import { EModal } from '../../../models/EModal';

interface ProfileDraftsProps {
  token: string;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
}

const ProfileDrafts: FC<ProfileDraftsProps> = ({ token, handleOpenModal }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const initialRequest = async () => {
    const response = await ProfileService.getDrafts(token);
    if (response.data) {
      setPosts(response.data);
    }
  };

  useEffect(() => {
    initialRequest();
  }, []);
  return (
    <Stack direction='column' alignItems='center' spacing={5}>
      {posts.length ? (
        posts.map((post: IPost, index) => (
          <Post
            key={`${index}_${post.id}`}
            handleOpenModal={handleOpenModal}
            post={post}
            profileRender
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
