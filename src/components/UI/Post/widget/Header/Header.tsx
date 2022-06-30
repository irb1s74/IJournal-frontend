import React, { FC, memo } from 'react';
import {
  PostHeader,
  PostHeaderAction,
  PostHeaderInfo,
} from './HeaderPost.styled';
import Avatar from '../../../Avatar/Avatar';
import { IconButton, Link, Typography } from '@mui/material';
import { IoEllipsisHorizontalSharp, IoPersonAddSharp } from 'react-icons/io5';
import { IPost } from '../../../../../models/IPost';

interface HeaderPostProps {
  post: IPost;
  isDraft: boolean;
  handleDropListOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const HeaderPost: FC<HeaderPostProps> = ({
  post,
  isDraft,
  handleDropListOpen,
}) => {
  return (
    <PostHeader>
      <PostHeaderInfo
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        spacing={2}
      >
        <Avatar user={post.author} />
        <Link href={`user/${post.author.id}`} underline='none'>
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
  );
};

export default memo(HeaderPost);
