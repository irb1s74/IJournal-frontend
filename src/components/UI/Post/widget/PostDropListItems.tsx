import React, { FC } from 'react';
import { MenuItem, Typography } from '@mui/material';
import { EModal } from '../../../../models/EModal';
import { IPost } from '../../../../models/IPost';

interface ProfileDropListItemsProps {
  post: IPost;
  handleOpenModal: (id: string, type: EModal, optional: any) => () => void;
  profile?: boolean;
  handleToUnPublish?: (postId: number) => () => void;
  handleDeletePost?: (postId: number) => () => void;
}

const PostDropListItems: FC<ProfileDropListItemsProps> = ({
  post,
  handleOpenModal,
  profile,
  handleToUnPublish,
  handleDeletePost,
}) => {
  if (profile) {
    return (
      <>
        <MenuItem
          onClick={handleOpenModal(
            EModal.createPostModal,
            EModal.createPostModal,
            post
          )}
        >
          <Typography variant='body2'>Редактировать</Typography>
        </MenuItem>
        {post.publish && handleToUnPublish && (
          <MenuItem onClick={handleToUnPublish(post.id)}>
            <Typography variant='body2'>Распубликовать</Typography>
          </MenuItem>
        )}
        {handleDeletePost && (
          <MenuItem onClick={handleDeletePost(post.id)}>
            <Typography variant='body2'>Удалить</Typography>
          </MenuItem>
        )}
      </>
    );
  }
  return (
    <>
      <MenuItem>
        <Typography variant='body2'>Пожаловаться</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant='body2'>Скрыть</Typography>
      </MenuItem>
    </>
  );
};

export default PostDropListItems;
