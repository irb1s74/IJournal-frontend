import React, { FC, memo, useCallback, useState } from 'react';
import {
  PostHeader,
  PostHeaderAction,
  PostHeaderInfo,
} from './HeaderPost.styled';
import Avatar from '../../../Avatar/Avatar';
import { IconButton, Typography } from '@mui/material';
import { IoEllipsisHorizontalSharp, IoPersonAddSharp } from 'react-icons/io5';
import { IPost } from '../../../../../models/IPost';
import { Link } from 'react-router-dom';
import DropList from '../../../DropList/DropList';
import DropListItems from '../DropListItems';
import { EModal } from '../../../../../models/EModal';

interface HeaderPostProps {
  post: IPost;
  isDraft: boolean;
  handleOpenModal: (id: string, type: EModal, optional: any) => void;
  profile: boolean;
  handleToUnPublish?: (postId: number) => () => void;
  handleDeletePost?: (postId: number) => () => void;
}

const HeaderPost: FC<HeaderPostProps> = ({
  post,
  isDraft,
  profile,
  handleOpenModal,
  handleToUnPublish,
  handleDeletePost,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isDropListOpen = Boolean(anchorEl);
  const handleDropListOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropListClose = useCallback(() => setAnchorEl(null), []);

  return (
    <>
      <PostHeader>
        <PostHeaderInfo
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={2}
        >
          <Avatar user={post.author} />
          <Link to={`/user/${post.author.id}`}>
            <Typography variant='subtitle1'>{post.author.nickname}</Typography>
          </Link>
        </PostHeaderInfo>
        <PostHeaderAction>
          {isDraft && (
            <Typography
              sx={{
                bgcolor: '#29253C',
                color: '#FFF',
                p: '5px',
                mr: '8px',
                borderRadius: '5px',
              }}
              variant='overline'
            >
              Черновик
            </Typography>
          )}
          <IconButton sx={{ fontSize: 16 }}>
            <IoPersonAddSharp />
          </IconButton>
          <IconButton onClick={handleDropListOpen} sx={{ fontSize: 16 }}>
            <IoEllipsisHorizontalSharp />
          </IconButton>
        </PostHeaderAction>
      </PostHeader>
      <DropList
        isDropListOpen={isDropListOpen}
        anchorEl={anchorEl}
        handleDropListClose={handleDropListClose}
      >
        <DropListItems
          post={post}
          handleOpenModal={handleOpenModal}
          profile={profile}
          handleToUnPublish={handleToUnPublish}
          handleDeletePost={handleDeletePost}
        />
      </DropList>
    </>
  );
};

export default memo(HeaderPost);
